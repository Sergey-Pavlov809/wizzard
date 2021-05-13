import { createStore } from "redux";
import reducers from "./../Redusers/Reducers";

const store = createStore(reducers);

export default store;
