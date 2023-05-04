import axios from "axios";

export const GET_ALL_CATERGORIES_LOADING = "GET_ALL_CATERGORIES_LOADING";
export const GET_ALL_CATERGORIES_SUCESS = "GET_ALL_CATERGORIES_SUCESS";
export const GET_ALL_CATERGORIES_FAIL = "GET_ALL_CATERGORIES_FAIL";

export const getAllCatergories = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CATERGORIES_LOADING });

    axios
      .get("http://localhost:5002/productCategory/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_CATERGORIES_SUCESS,
          payload: response.data.productCategory,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_CATERGORIES_FAIL });
      });
  };
};
