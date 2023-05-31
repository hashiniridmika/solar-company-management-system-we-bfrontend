import axios from "axios";

//view
export const GET_ALL_ORDERITEMWITHQUANTITY_LOADING =
  "GET_ALL_ORDERITEMWITHQUANTITY_LOADING";
export const GET_ALL_ORDERITEMWITHQUANTITY_SUCESS =
  "GET_ALL_ORDERITEMWITHQUANTITY_SUCESS";
export const GET_ALL_ORDERITEMWITHQUANTITY_FAIL =
  "GET_ALL_ORDERITEMWITHQUANTITY_FAIL";

export const getAllOrderitemWithQuantity = (order_id) => {
  console.log(order_id);
  return (dispatch) => {
    dispatch({ type: GET_ALL_ORDERITEMWITHQUANTITY_LOADING });
    axios
      .post("http://localhost:5002/orderitemWithQuantity/get-all-by-order-id", {
        order_id,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_ORDERITEMWITHQUANTITY_SUCESS,
          payload: response.data.orderitemWithQuantity,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_ORDERITEMWITHQUANTITY_FAIL });
      });
  };
};
