import {combineReducers} from "redux";
import {createStore,  applyMiddleware} from "redux";
import timezonesReducer from "./timezonesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    timezones: timezonesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))