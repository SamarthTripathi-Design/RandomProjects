import { createStore } from "redux";
import reducer from "../reducers/index";

export const store = createStore(reducer);

window.mystate = store;

export default store;
