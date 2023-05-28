import axios from "axios";

export const EMPOLYEE_LOGIN_START = "EMPOLYEE_LOGIN_START";
export const EMPOLYEE_LOGIN_SUCCESS = "EMPOLYEE_LOGIN_SUCCESS";
export const EMPOLYEE_LOGIN_FAIL = "EMPOLYEE_LOGIN_FAIL";

export const employeeLogin = (email, password) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({ type: EMPOLYEE_LOGIN_START });
    axios
      .post("http://localhost:5002/employee/sign-in", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: EMPOLYEE_LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: EMPOLYEE_LOGIN_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
