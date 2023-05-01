import { SET_SEARCH_CRITERIA } from "../constants";

const initialState = {
  criteria: {},
};

function searchCriteriaReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_CRITERIA:
      return {
        ...state,
        criteria: action.data,
      };
    default:
      return state;
  }
}

export default searchCriteriaReducer;
