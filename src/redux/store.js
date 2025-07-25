import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import crudreducer from "./reducer/crudreducer";



let store = createStore(crudreducer, applyMiddleware(thunk));
export default store;
