import { combineReducers } from "redux";
import sheetDataReducer from "./sheetDataReducer";
import searchCriteriaReducer from "./searchCriteriaReducer";
import tableDataReducer from "./tableDataReducer";

export default combineReducers({
  sheetDataReducer,
  searchCriteriaReducer,
  tableDataReducer,
});
