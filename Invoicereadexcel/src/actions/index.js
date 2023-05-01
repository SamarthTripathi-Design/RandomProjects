import {
  SET_SHEET_DATA,
  SET_SEARCH_CRITERIA,
  SET_TABLE_DATA,
} from "../constants/index";

export const setSheetData = (data) => ({
  type: SET_SHEET_DATA,
  data,
});

export const setSearchCriteria = (data) => ({
  type: SET_SEARCH_CRITERIA,
  data,
});

export const setTableData = (data) => ({
  type: SET_TABLE_DATA,
  data,
});
