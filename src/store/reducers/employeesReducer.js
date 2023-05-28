import * as Actions from "../actions/employeesAction";

const inisialState = {
  employeeLoginLoadingStatus: "notStarted",
  token: "",
  employee: {},
  loginErroeMessage: "",
};

const employeeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.EMPOLYEE_LOGIN_START:
      return { ...state, employeeLoginLoadingStatus: "loading" };

    case Actions.EMPOLYEE_LOGIN_SUCCESS:
      return {
        ...state,
        employeeLoginLoadingStatus: "sucess",
        token: action.payload.token,
        employee: action.payload.employee,
      };

    case Actions.EMPOLYEE_LOGIN_FAIL:
      return {
        ...state,
        employeeLoginLoadingStatus: "fail",
        loginErroeMessage: action.payload,
      };

    default:
      return state;
  }
};

export default employeeReducer;
