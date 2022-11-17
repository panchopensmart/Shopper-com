import {createStore, combineReducers, applyMiddleware} from "redux";
import reducerDec from "./reducers/reducerDec"
import reducerInc from "./reducers/reducerInc";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    increment: reducerInc,
    decrement: reducerDec
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store