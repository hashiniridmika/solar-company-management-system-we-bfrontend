import axios from "axios";

export const EMPOLYEE_LOGIN_START = "EMPOLYEE_LOGIN_START";
export const EMPOLYEE_LOGIN_SUCCESS = "EMPOLYEE_LOGIN_SUCCESS";
export const EMPOLYEE_LOGIN_FAIL = "EMPOLYEE_LOGIN_FAIL";

export const GET_ALL_EMPLOYEE_LOADING = "GET_ALL_EMPLOYEE_LOADING";
export const GET_ALL_EMPLOYEE_SUCESS = "GET_ALL_EMPLOYEE_SUCESS";
export const GET_ALL_EMPLOYEE_FAIL = "GET_ALL_EMPLOYEE_FAIL";

export const SET_USER_SELECTED_EMPLOYEE = "SET_USER_SELECTED_EMPLOYEE";

export const getAllEmployees = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_EMPLOYEE_LOADING });
    axios
      .get("http://localhost:5002/employee/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_EMPLOYEE_SUCESS,
          payload: response.data.employees,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_EMPLOYEE_FAIL });
      });
  };
};

//sign in
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
