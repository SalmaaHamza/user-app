import * as actionTypes from "../actionTypes";

const reducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
export default reducer;
