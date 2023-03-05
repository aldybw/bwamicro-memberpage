import { combineReducers } from "redux";
import courses from "./courses";
import orders from "./orders";
import users from "./users";

export default combineReducers({
  users,
  courses,
  orders,
});
