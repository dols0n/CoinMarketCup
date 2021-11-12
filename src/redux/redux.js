import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from 'redux-thunk'
import appReducer from "./app-reducer";


let mainReducer = combineReducers({
    app: appReducer
})


let store = createStore(mainReducer, applyMiddleware(thunkMiddleWare))

export default store