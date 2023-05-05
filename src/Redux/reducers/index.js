import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const reducers = combineReducers({ allData: movieReducer });

export default reducers;
