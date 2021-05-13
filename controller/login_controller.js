const bodyParser = require('body-parser')
const md5_util = require('../utils/MD5_utils')
const encrypt_util = require('../utils/encrypt_util')
const sanitize = require('mongo-sanitize');

// render login page
let show_page = (req, res) => {
    res.render('./customer/login',{title: 'Login'});
}

// check login info
let check_login = (req, res) => {

    try{
        // encrypt to MD5, so that to compare with the MD5 record from db
        let user_plain_password = sanitize(req.body.password);
        let user = {
            "login_id": sanitize(req.body.login_id),
            "password": encrypt_util.encrypt(user_plain_password),
            "user_type": 'CUSTOMER'
        }

        console.log('input password encrypted: ' +user.password)

        // select user model
        let customer_model = require('../model/customer')

        // find by login_id, return the 'password' field of the model
        let query = customer_model.findOne({'login_id': user.login_id})
        // the find will return the 'password' field of the model
        query.select('password');
        query.exec((err, resp) => {
            if(err) {
                console.log('error: ' + err);
            } else {

                // if no login id record match
                if(resp === null) {
                    console.log('no match password')
                    res.redirect('/customer/login_failed')
                } else {
                    // if login id record match

                    // if password equals the record
                    /* Compare plain input password with encrypted database record */
                    if(encrypt_util.compare(user_plain_password, resp.password)){
                        // sent user_id information to session
                        req.session.user = user.login_id;
                        req.session.user_type = user.user_type;

                        // sent user_id to cookie, remember the user
                        if(req.body.remember_me === 'on') {
                            res.cookie("user_type",
                                'CUSTOMER',
                                {maxAge: 1000 * 60 * 60 * 48})
                            res.cookie("user",
                                user.login_id,
                                {maxAge: 1000 * 60 * 60 * 48})
                        }

                        // If the original request path exists, redirect the user to the previous request path
                        let redirectUrl = '/';
                        if (req.session.originalUrl) {
                            redirectUrl = req.session.originalUrl;
                            // Clear the original request path stored in the session
                            req.session.originalUrl = null;
                        } else {
                            // No original request path exists, redirect the user to the success page
                            redirectUrl = '/customer/login_success';
                        }

                        res.redirect(redirectUrl);
                    } else {

                        // password error, failed
                        res.redirect('/customer/login_failed')
                    }
                }
            }
        });
    } catch (e) {
        console.log(e)
        res.redirect('/500')
    }

}

let handle_logout = (req, res) => {

    try{
        res.clearCookie('user_type')
        res.clearCookie('user')
        req.session.destroy();

        res.render('./customer/logout', {title: 'Log Out'});
    } catch (e) {
        console.log(e)
        res.redirect('/500')
    }
}

let show_success_page = (req, res) => {
    res.redirect('/index')
}

let show_failed_page = (req, res) => {

    res.render('./customer/login_failed', {title: 'Login failed'});
}

// export functions above
module.exports = {
    show_page, check_login, show_success_page, show_failed_page, handle_logout
}