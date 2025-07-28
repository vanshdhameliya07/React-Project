import { combineReducers } from "redux";
import crudreducer from "./crudreducer";

let rootReducer = combineReducers({
    student: crudreducer
})


export default rootReducer