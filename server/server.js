require("express-group-routes");
require('bcrypt')

//Instantiate Express
const express = require("express");
//Cors Policy
const cors = require("cors");
//Use express variable in app
const app = express();
//Define port to listen from server
const port = process.env.PORT || 8000	
//Cross origin policy
app.use(cors());

//Use body parser
app.use(express.json());

//Controllers
const CategoriesController = require("./controllers/Categories")
const EventsController = require("./controllers/Events");
const OrdersController = require("./controllers/Orders")
const ProfilesController = require('./controllers/Profiles')

const { auth } = require('./helpers/middleware')

//Create get Response
app.get("/", (req, res) => {
  //Give response to client
  res.send("<h1>Hello Express</h1>");
});

app.group("/api/v1", router => {
  // // ------ CATEGORIES ------
  // get one category
  router.get('/category/:id', CategoriesController.getOneCategory)
  // get all categories
  router.get('/categories', CategoriesController.getAllCategories)
  // get all events with the same category
  router.get('/category/:id/events', CategoriesController.getAllEventsOfACategory)

  // // ------- EVENTS ------
  // get events by title
  router.get('/events', EventsController.getEventByTitle)
  // get events with start_time=2019-12-30
  router.get('/events', EventsController.getEventsQueryToday)
  // get events with start_time_gte=2019-12-31
  // router.get('/events', EventsController.getEventsQueryTomorrow)
  // get an events
  router.get('/event/:id', EventsController.getAnEvent)
  // post an events
  router.post('/event', EventsController.newEvents)

  
  // // ------ ORDER ------
  // GET order with query status approved
  router.get('/orders', OrdersController.getAllConfirmed)
  // POST an order 
  router.post('/order', OrdersController.newOrder );
  // PUT an order 
  router.put('/order/:id', auth, OrdersController.confirmOrder );

  // //  ------ USERS ------
  // Login account
  router.post("/login", ProfilesController.login);
  // Register an account
  router.post("/register", ProfilesController.register);
  // Get a user
  router.get("/profile/:id", ProfilesController.getOne)
  // Get all favorited event of a user
  router.get("/user/:id/favorites", ProfilesController.getFavorited)
});

//Server must to listen to port
app.listen(port, () => console.log(`Server is listening to Port: ${port}`));