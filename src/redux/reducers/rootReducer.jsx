import { combineReducers } from "redux";
import moviesReducer  from './moviesReducer';
import categoriesReducer  from './categoriesReducer';
const rootReducer = combineReducers({
    movies: moviesReducer,
    categories: categoriesReducer,
});

export default rootReducer;