import { createStore, combineReducers, applyMiddleware } from "redux";

import { categories } from "../_reducers/categories";
import { events } from "../_reducers/events";
import { orders } from "../_reducers/orders";
import { users } from "../_reducers/users";

import { promise, logger } from "./middleware";

//Get All reducers available
//Global State come from here
const reducers = combineReducers({
  categories,
  events,
  orders,
  users
});

//Setup Store Redux
// state nya masuk ke store sini
const store = createStore(reducers, 
  applyMiddleware(promise, logger)
);

export default store;