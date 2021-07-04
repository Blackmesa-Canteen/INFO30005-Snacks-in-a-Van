# INFO30005-Snacks-in-a-Van
Assignment of Web information technologies. Node.js full stack
<img width="1400" alt="Screen Shot 2021-07-05 at 12 34 28 AM" src="https://user-images.githubusercontent.com/69796042/124392542-d06a7480-dd28-11eb-863f-1cd06053dc2e.png">

# Specification

Your team has been contracted to design and build web apps for Snacks in a Van, a new startup company operating in Melbourne. Snacks in a Van runs a fleet of food trucks that work as popup cafes.

Our vendors drive around Melbourne, parking wherever they think there are customers. They have no fixed schedule and are mobile and flexible. Some vendors tend to go to the same places each day, while others are more random, or try to park near big events like sporting matches and university open days.

Photo: Alvin Mahmudov, Unsplash

While our vans don’t have fixed locations, their current location is very important to our customers, who need to be able to find nearby vans when they’re hungry. We make this information available to customers via a web app. To save time, the app also allows registered customers to order their snacks in advance of arriving at the van.

We expect to have around 100 vans and 100k customers. We give each van a fun name like “Tasty Trailer”. Vendors are identified as van names in our apps – we don’t make staff names public.

You need to make two web apps: one for customers and one for vendors.

# 1. Customer
When a customer opens their app, they first need to see where the nearest vans are. To do this, the app needs to get the customer’s location, access current van locations from the database, calculate the five nearest vans, and display their details. This display could simply be a list (closest van at the top), or for bonus marks, you can show their locations on a map.

After the customer chooses the van they want to purchase from (it won’t necessarily be the closest one) a menu should appear which lists all the snacks available. Every van offers the same menu, because we are a chain - but customers order from a specific van.

To find a van and see the menu, customers don’t need to be logged in. But to proceed beyond this point and place an order, they need to log in. (If a prospective customer doesn’t already have an account, they’ll need to register and create one.) In our database we want to store the customer’s family and given names, a login ID (email address) and password. Customers should be able to change their profile details (name and password) later.

Use good security practices such as authentication and session management to handle logins and registrations and to appropriately restrict access to features and data.

Having seen the menu, a logged-in customer can now place an order. An order consists of one or more snacks, with quantities for each (e.g. “two cappuccinos, a flat white, and three small cakes”). When the customer has entered their order details, ask them to confirm, then save the order in the database and make it visible to the chosen vendor, who must now prepare the snacks. Orders need to be timestamped, because we give customers a 20% discount if snacks are not ready in 15 minutes. Once an order has been placed, customers may want to monitor its status, such as whether it has been fulfilled and is ready for pickup.

Customers tend to change their mind a lot, and we need to design for this. We allow customers to change or cancel their order within 10 minutes of placing it and before it is fulfilled: after that they must pay for the original order. A cancelled order should be invisible to photo: Nathan Dumlao, Unsplash customer and vendor, but not deleted from the database, as we must

keep track of this behaviour. Changing an order may involve adding or subtracting items or

changing any of the quantities. If a customer changes their order, the timestamp is reset and

their 10-minute change window starts again. The company may want to fine-tune these global

time limits (10 and 15 minutes), so don’t hard-code them.

Payment is automatically handled by an external payments system, so you don’t need to implement payment in your app.

For bonus marks, allow the customer to rate their experience after picking up snacks. Ratings should be 1-5 with an optional comment.

Customers will mostly use their app on phones (of all kinds) but we need to cater to all screen sizes including desktops.

# 2. Vendor
The vendors working in our vans also need an app. They log in using the van name rather than their personal name or email.

When a vendor has parked and is ready to start selling, they need to send their location to the database and mark themselves as open-forbusiness. Allow them to enter a short text address (e.g. “on Grattan st outside Melbourne Uni”). At the same time, have the app capture their geo-location. When they leave this location to drive somewhere else or quit for the day, allow the vendor to mark this in the database.

Photo: Nathan Dumlao, Unsplash

Vendors need a screen with a list of their van’s outstanding orders, i.e. orders which have been placed but not yet fulfilled. This list needs to be in time order, with the older, more urgent orders at the top.

The vendor needs to be able to click on an order in the list to display the details of that order, including the order number, customer’s given name, the items that were ordered, and how many minutes remain before a discount must be awarded.

Once an order is fulfilled (the snacks are prepared), the vendor needs to be able to click a button to mark this, and when the customer picks up the snacks, the vendor needs to be able to mark this too. Fulfilled orders need to be shows as such in the vendor’s order list, while picked-up orders should disappear from the list – though they are not deleted from the database, and should be easily findable again in case customers return to discuss their order. If the 20% discount for late fulfillment was applied, make sure you record this.

We expect that vendors will use an iPad placed on a shelf in the van. Their webpages need to be usable at this screen size, and be clear and well-designed so that operators don’t make mistakes in these busy workplaces.

# 3. Others
## Menu
All of our vans offer the same menu. But don’t hard-code it in HTML; rather, store it in the database. Include photos and prices for each snack. Make sure your photos do not breach copyright: we suggest you source them from Unsplash.

The list of snacks that we currently sell is: Cappuccino, Latte, Flat white, Long black, Plain biscuit, Fancy biscuit, Small cake, Big cake
## Locations, distances, and maps
Locations are recorded as a pair of decimal numbers representing longitude and latitude. A precision of four decimal points corresponds to about 10 metres in Melbourne, which is good enough for our business. You can get the location of a web user via the Geolocation API and some simple client-side JavaScript.

Calculate the distance between two locations using the Euclidean formula. In other words, regard distance as the length of a straight line between the points: there is no need to calculate a walking path or take obstacles or traffic into account.

Displaying locations on a map is an optional challenge for bonus marks. You could use Google Maps or Open Street Maps. Instructions for using these can be found online.
## “Live” pages
Some screens would work better if they updated live: for example, when customers and vendors are monitoring orders. This is an optional challenge for bonus marks.

---

**The University of Melbourne**
# INFO30005 – Web Information Technologies

# Group Project Repository

Welcome!

* For *Deliverable 2：Mockup APP Server*, see [Mockup APP Server](#mockup-app-server).
（**Customer app mockup is deprecated in the latest version**）


* For *Deliverable 3：Backend with Frontend*, see [Customer Features](#customer-features).


* For *Deliverable 4*, see [General Information](#general-information).

## Table of contents
* [General Information](#general-information)
* [Mockup APP Server](#mockup-app-server)
* [Customer Features](#customer-features)
* [Vendor Features](#vendor-features)
* [Technologies](#technologies)
* [Use Cases](#use-cases)

## General Information

### Commit ID to mark
< Waiting  >

### URL website on Heroku
https://project-t05-x3ra.herokuapp.com/

### MongoDB Compass Database access
mongodb+srv://admin:3ulH5EXbBpj5mcax@cluster0.1saxw.mongodb.net/test?authSource=admin&replicaSet=atlas-gq4o85-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true

### Dummy users
#### Dummy customer

- Login ID: dummy@example.org

  password: dummy123456

#### Dummy vendor

- Login ID: justice

  password: Admin123


- Login ID: baidu

  Password: baidu123456


- Login ID: sina

  Password: sina123456

### Test details


## Mockup APP Server

### Customer APP mockup


**Warning: Customer app mockup is deprecated in the latest version!**

Customer mockup functionalities are fulfilled by `customer_mock_up_controller.js` in `controller` folder and `customer_mock_up_router.js` in `router` folder.

Mockup interfaces ignored login interception to make it convenient for debugging, and customer id is hard-coded, but we have implemented login interception in the other route. For more information, see **Other features** below.

#### Mockup features:

***1. View menu of snacks (including pictures and prices):***

​	Request to the url below with GET method, then it will return html document for menu, you can add/remove line items there:

​	Input: van_name as a param at `https://project-t05-x3ra.herokuapp.com/customer_mockup/menu/:van_name`            

​    van_name param can be : `debug_van_name`,  `valve`,  `ubisoft`, `ea`...

   Input Example: https://project-t05-x3ra.herokuapp.com/customer_mockup/menu/debug_van_name

   Output: a html document of menu of snacks will show in the browser with 200 status.

​	Exception: If query database occurs a failure, show error message on the console.

***2. View details of a snack***

​	Request with a snack name with GET method, then it will return snack detail from database in JSON.

​	Input: snack_name as a param at `https://project-t05-x3ra.herokuapp.com/customer_mockup/snack_detail/:snack_name`    

​    snack_name param can be: `latte`, `plain_biscuit,` `fancy_biscuit`, `small_cake`, `big_cake`, `cappuccino`, `long_black`...

​    Input Example: https://project-t05-x3ra.herokuapp.com/customer_mockup/snack_detail/fancy_biscuit

​    Output: a JSON of snack details will show in the browser with 200 status

​    Exception: when a snack is not exist, returns a warning. If query database occurs a failure, show error message on the console.

***3. Customer starts a new order by requesting a snack***
    There are two ways to place a new order:

1. Request with a form via POST method, then it will place an order in database
   
   Input: x-www-form-urlencoded form, the key-value should be `snack_name: number`,  for example:
   
   ``` javascript
   fancy_biscuit: 2
   small_cake: 1
   latte: 3
   not_valid_snack_name: 66
   ```
   
   Send the form with POST method to https://project-t05-x3ra.herokuapp.com/customer_mockup/place_an_order/:van_name. 
   
   van_name param at the end of url can be changed, 
   
   
   
   Input example: https://project-t05-x3ra.herokuapp.com/customer_mockup/place_an_order/ubisoft or https://project-t05-x3ra.herokuapp.com/customer_mockup/place_an_order/valve
   
   
   
   Output: a JSON of an order entity will show in the browser with 200 status. The new order will be placed in database's orders collection.
   
   
   
2. Or, you can get access to https://project-t05-x3ra.herokuapp.com/customer_mockup/menu/debug_van_name, in the html page, you can edit line items, then press `place an order` button to submit the form. In this way you can also place an order in the MongoDB and get a return in JSON.

    

#### Other features:

We have implemented more functionalities than requirements of the deliverable 2:

1. Login interceptor for place an order:

   User can see a menu of a van via https://project-t05-x3ra.herokuapp.com/menu/debug_van_name, if the user hasn't logged in and press `place an order` button at this route, login interception will redirect the user to the login in page. 

   Login interceptor is based on session, which is defined in `login_interceptor.js` in `controller` folder

2. Login/register/logout:

   User can login via https://project-t05-x3ra.herokuapp.com/customer/login, and register via https://project-t05-x3ra.herokuapp.com/customer/register. 

   A customer acoount for debugging: admin@admin.com, password: admina

   You can see other RESTful routes for customer operations in `customer_router.js` file at `router` folder.

3. Map:

   User can see vans' position on the map in index via https://project-t05-x3ra.herokuapp.com/, vans' position is rendered from database.

4. My orders:

   If one user has logged in, he/she can see orders have made via  https://project-t05-x3ra.herokuapp.com/customer/my_orders/,

   order records are from database.

   You can see other RESTful routes for order operations in `my_orders_router.js` file at `router` folder.

5. Others:

   You could check `controller` and `router` to see more features we have implemented for the project so far.

   

### Vendor APP 


1. Setting van status (vendor send slocation, marks van as ready-for-orders)

   * PUT Request
   * INPUT: send van name in url | send van_location, van_location_description, van_address in application/x-www-form-urlencoded type
   * OUTPUT:  Response  -> Open for Business: <van_name> | OPEN: true at { x_pos: <Number>, y_pos: <Number> }
   * Exception Handling: Handles van name not found | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/van_open/:id (:id is a van_name)

2. Setting van status (Vendor Closes Van)

   * PUT Request
   * INPUT: send van name in url
   * OUTPUT:  Response  -> Closed for Business: <van_name>
   * Exception Handling: Handles whether ongoing orders are affected | Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/van_close/:id (:id is a van_name)
  
3. Filter Orders based on Order Status

   * GET Request
   * INPUT: send van name and order status in url
   * OUTPUT: JSON output of orders 
   * Exception Handling: Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/orders/:van_name/:status 


4. Update order status to next status (Mark an order as "fulfilled")
   * PUT Request
   * INPUT: send order id in url
   * OUTPUT: Response  -> Successfully updated order: <order._id> | complete.
   * Exception Handling:  Handles invalid order status and van name not found  | Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database

   * API ENDPOINT: /vendor/update_order_status/:id  (:id is an order id)
  
5. Show order details
   * GET Request
   * INPUT: send order id in url
   * OUTPUT: JSON output of releevant order details extracted from customer, snack and order models
   * Exception Handling: Handles unavailable snack names, vans and customers| Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/order/:id  (:id is an order id)
    
6. Search orders for given van based on Search mode 
  
   * GET Request
   * INPUT: send van_name in url | search_mode (search-order-id/search-cust-id) and search_string as params
   * OUTPUT: JSON output of exactly matched and completed orders
   * Exception Handling: Handles no results found | Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/search_order/:van_name
  
7. Show Vendor Dashboard 

   * GET Request
   * INPUT: (None)
   * OUTPUT: Rendered Ouptut of Vendor Dashboard
   * Exception Handling: Renders if Van is OPEN | Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/dashboard
  
8. Show Vendor Business Page 

   * GET Request
   * INPUT: (None)
   * OUTPUT: Rendered Ouptut of Business Page 
   * Exception Handling: Vendor Needs to Be Logged In | Catches Bad Requests (400), Internal Server Errors (50-x) and Database Errors

   * API ENDPOINT: /vendor/buisness
 
## Customer Features

### Dummy customer

Login ID: dummy@example.org

password: dummy123456
   
### Dummy vendor

Login ID: justice

password: Admin123

Login ID: baidu

Password: baidu123456

Login ID: sina

Password: sina123456


- *If you would like, you could register a new customer account by clicking `join us today` button on the login page*


- *To make debug easy, customer's marker position on the map is hard-coded for now*

### Features
1. Login: For the desktop size, you could login in by clicking `Please Login` on the top-left, For the mobile size, you can click the icon on the bottom.
You could also trigger login page when you make an order without login-in.
   
   Quick visit: https://project-t05-x3ra.herokuapp.com/customer/login
   

2. View menu of snacks: On the `index` there is a map. You can click on the blue marker that refers to the van(If there are no blue markers or you can not trigger redirect, refresh the page), then you will be redirected to the `van details` page. Then click `Menu` button, you can
get to the menu page.

   Quick visit: https://project-t05-x3ra.herokuapp.com/menu/demo_van
   

3. Order snacks: You could select multiple snacks and quantities on the `Menu` page, then click `Place an order` button.

   Quick visit: https://project-t05-x3ra.herokuapp.com/menu/demo_van


4. View Order Details: There are 2 ways to visit order details page: Firstly, after you made an order, you can choose `See My Orders` button that can redirect browser to
`My orders` page, where you can see current orders and previous orders. Secondly, you can click `My Orders` button on the top-left page in desktop size, or click middle icon on the page bottom in mobile size.

    To see more order details, click order blocks that shown in the `My Orders` page to gain a view of more order details. Where you can also change/Cancel a current order.

   Quick visit: https://project-t05-x3ra.herokuapp.com/customer/my_orders/

## Vendor Features
1. Login: Redirect to login failed page if input incorrectly, forward into dashboard when login success.You could use dummy account to login, if you would like, also try to create your own account. Login page is available here:
   
   Quick visit: https://project-t05-x3ra.herokuapp.com/vendor/login
  
   
2. Handle dashboard: Four bottons on top side indicate orders in four different status, click on them to check orders inside. Change status when you need to (eg.confirm order by clicking on comfirm botton at side in Unconfirmed Orders session).
   
   Quick visit: https://project-t05-x3ra.herokuapp.com/vendor/dashboard

   
3. Update location/close van: you could update your location by clicking on "Update Location". Closing van by clicking on "Close SnackVan", and this will redirect you to open for business page.
   
   Quick visit: https://project-t05-x3ra.herokuapp.com/vendor/buisness
   

### Dummy vendor

- Login ID: justice

  password: Admin123


- Login ID: baidu

  Password: baidu123456


- Login ID: sina

  Password: sina123456

## Technologies
Project is created with:
* NodeJs 14.16.0
* Express 4.17.1
* MongoDB Atlas
* mongoose 5.12.3
* Bootstrap 3
* Baidu Map API
* bcrypt
* content-filter

## Use Cases

### 1 Customer

*When customer is NOT login-in*

- [x] A customer can find nearby vans ( van list OR map )
- [x] Customer App can get customer's location.
- [x] Customer App can access van locations from database.
- [x] Customer App can calculate five nearest vans. ( show van locations in list )
- [x] A customer can choose a van to purchase from.
- [x] A menu should appear, which list snacks after a customer choosing a van
- [x] Customer App needs to handle login registrations.

*When customer is login-in*

- [x] A customer can register & login with email and password
- [x] Customer App's database will store a customer's loginID(email), password, family name and given name.
- [x] A Customer can change his/her profile details (names and password)
- [x] A logged-in Customer can place an order.
- [x] An order consists of 1..* snacks, with quantities for each, needs to be timestamped.
- [x] An order will be given 20% discount if the order is not ready for pick up in 15min.  (This time can be changed by Company & developer)
- [x] A customer can monitor order status (fulfilled or ready for pick up).
- [x] A customer can cancel or change (add or remove items) the order within 10 min (This time can be changed by Company & developer)
- [x] A cancelled order shouldn't be seen to Customers and Vendors
- [x] Changing order can reset change timestamp
- [x] A Customer can rate the order, rating should be 1-5
- [x] Customer app will be used on phones and also desktops.

### 2 Vendor

- [x] A vendor can log in using van name.
- [x] A vendor can be registered by name and password.
- [x] A vendor can send their location to the database, address input is short text address (.*** st, Melbourne )
- [x] Vendor APP can capture the address text
- [x] A vendor can mark his van as open-for-business OR quit for the day
- [x] A vendor can change location address
- [x] A vendor need a list of van's orders that are not yet fulfilled, in time order, urgent on the top
- [x] A vendor can click on the order in the list and see order detail ( order number, customer's given name, order items, time remains for 20% discount )
- [x] A vendor can mark an order as fufilled ( snacks are prepared ), should be seen
- [x] A vendor can mark an order as finished ( snacks are picked up ), should be invisible, but not deleted in database
- [x] A finished order should be findable and show again
- [x] Vendor APP will be used on ipad size. Design should be clear so that operators will make less mistakes.

### 3 Others

#### 3.1 menu

- [x] Snacks of menu should be stored in dataBase include images and prices for each

  ( for the image, hard-code UnSlash source url in dataBase is okay )

#### 3.2 locations

- [x] calculate distance with Euclidean formula
- [x] display locations on the map

#### 3.3 live pages

- [x] Order monitoring pages will be updated live (refresh and read data from database)
