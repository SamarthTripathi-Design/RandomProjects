import { SET_TABLE_DATA } from "../constants";

const initialState = {
  tableData: [],
};

const tableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
      let tableList = [];
      action.data.forEach((item) => {
        tableList.push(item);
      });
      return {
        ...state,
        tableData: tableList,
      };
    default:
      return state;
  }
};

export default tableDataReducer;
