import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk'

const composed = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composed);

export default store
