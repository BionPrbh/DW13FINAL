import { createStore, combineReducers, applyMiddleware } from "redux";
import { category, categoriesAll, categoriesAllEvent } from "../_reducers/categories";
import { eventToday, eventOne, eventCreate } from "../_reducers/events";
import { orderCreate, orderConfirmed, orderApproved } from "../_reducers/orders";
import { userLogin, userRegister, userOne, userFavorited } from "../_reducers/users";
import { promise, logger } from "./middleware";

//Get All reducers available
//Global State come from here 
const rootReducers = combineReducers({
  category,
  categoriesAll,
  categoriesAllEvent,
  eventToday, 
  eventOne, 
  eventCreate,
  orderCreate, 
  orderConfirmed, 
  orderApproved,
  userLogin, 
  userRegister, 
  userOne, 
  userFavorited
});

//Setup Store Redux
// state nya masuk ke store sini
const store = createStore(rootReducers, 
  applyMiddleware(promise, logger)
);

export default store;