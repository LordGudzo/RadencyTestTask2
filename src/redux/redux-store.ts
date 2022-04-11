import { combineReducers, createStore } from "redux";
import notesReduser from "./notesReduser";
import summaryReduser from "./summaryReduser";


let redusers = combineReducers({
    notesTable: notesReduser,
    summaryTable: summaryReduser
});

let store = createStore(redusers);

export default store;