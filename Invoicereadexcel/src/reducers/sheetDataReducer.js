import { SET_SHEET_DATA } from "../constants";

const initialState = {
  sheetData: {},
};

const sheetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHEET_DATA:
      return {
        ...state,
        sheetData: action.data,
      };
    default:
      return state;
  }
};

export default sheetDataReducer;
