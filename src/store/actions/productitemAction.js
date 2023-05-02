import axios from "axios";

export const GET_ALL_PRODUCTITEMS_LOADING = "GET_ALL_PRODUCTITEMS_LOADING";
export const GET_ALL_PRODUCTITEMS_SUCESS = "GET_ALL_PRODUCTITEMS_SUCESS";
export const GET_ALL_PRODUCTITEMS_FAIL = "GET_ALL_PRODUCTITEMS_FAIL";

export const getAllProductitems = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTITEMS_LOADING });
    axios
      .get("http://localhost:5002/productitem/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_PRODUCTITEMS_SUCESS,
          payload: response.data.productItem,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_PRODUCTITEMS_FAIL });
      });
  };
};
