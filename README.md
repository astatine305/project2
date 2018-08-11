# ROOT | Product Manager

TEAM ROOT: Audrey Feranandez, Ben Clark, Brian Nguyen, and Fletcher Bunales

You can check out the deployed app on Heroku [here](https://warm-oasis-23319.herokuapp.com/)!

This was the second group project for the UCI Full Stack Web Development Boot Camp. Our team decided to create a mobile app that would be used to collect and store product information and sort it by preference for future reference. We call our app, ROOT.

Say you're out with friends or trying out a new restaurant. You order an amazing meal and you want to remember what you ordered so you can order it again next time you come. Or maybe you tried a new beverage and want to see  where you can buy it, just not when your in the middle of dinner or busy hanging out with friends. 

With ROOT, you can quickly log the product info along with whether you liked or didn't like it and rate it. When you want to recall the product it's safely stored in your ROOT. Just create an account and log in. Added products are stored on the "likes" and "dislikes" pages which can be accessed from the links at the bottom of any page on the site. Stored products can be viewed, edited and deleted with our easy to use UI.

## Design Process

* Used sketches to develop an easy to use interface for logging product details and saving them to a database
* Designed a logo, theme and graphic elements to convey the idea of ROOT being like a personal product tree
* Front end team began building the wireframe for page layouts while the backend started writing script to execute CRUD with the data
* After running into backend challenges, we had to rethink the way the app received user data so we could start testing the backend
* Merged front end and backend files and ran tests to debug

## Technologies Used

(other than the basics: HTML, CSS, jQuery, Node, MySQL, etc…)
* Sequelize
* Body-Parser
* Express
* Express MySQL Session
* Express Session
* Express Validator
* bcryptJS
* Cookie Parser
* .Env
* Passport
* Passport-local
* Path

## Future Developments

* Utilize user login and session data to provide a customized product database for each user
* Use the mobile phone camera to add products to the database
* Add swipe technology to indicate product preference
* Add voice memo capability to store product info
* Add Modals for product added and update confirmation
* Allow the user to customize and filter product pages
* Provide links to external sites or give you the location of stores where you can purchase the products

## Screenshots

### Login Page (Index)

![Mobile Size](/screenshots/home.png)

### Create A Profile

![Mobile Size](/screenshots/create.png)

### Add A Product

![Mobile Size](/screenshots/add.png)

### Product Added Confirmation

![Mobile Size](/screenshots/confirm.png)

### Product List View (Liked)

![Mobile Size](/screenshots/liked.png)