import { fetchList } from "../../api/listAPIs";
import { GET_LISTS } from "../actionTypes";

const listsActions = (type, genere) => (dispatch) => {
  fetchList(type, genere)?.then((res) => {
    console.log(res.data);
    dispatch({
      type: GET_LISTS,
      payload: res.data,
    });
  });
};

export default listsActions;
