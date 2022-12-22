import {combineReducers} from "redux";
import todosReducer from "./todosReducer";


const rootReducer = combineReducers({
    listTodos : todosReducer
})

export default rootReducer;