import { combineReducers, compose, createStore } from "redux";
import notesReduser from "./notesReduser";
import summaryReduser from "./summaryReduser";


let reducers = combineReducers({
    notesTable: notesReduser,
    summaryTable: summaryReduser
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, /* preloadedState, */
    composeEnhancers()
  );

export default store;