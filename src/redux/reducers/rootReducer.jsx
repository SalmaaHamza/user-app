import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import categoriesReducer from "./categoriesReducer";
import listReducer from "./listReducer";
const rootReducer = combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer,
  lists: listReducer,
});

export default rootReducer;
