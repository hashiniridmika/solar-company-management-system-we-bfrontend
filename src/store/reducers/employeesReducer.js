import * as Actions from "../actions/employeesAction";

const inisialState = {
  employeeLoginLoadingStatus: "notStarted",
  token: "",
  employee: {},
  loginErroeMessage: "",
  getAllEmployeeListLoading: "notStarted",
  allEmployeesList: [],
  userSelectedEmployee: {},
};

const employeeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_EMPLOYEE_LOADING:
      return { ...state, getAllEmployeeListLoading: "loading" };

    case Actions.GET_ALL_EMPLOYEE_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllEmployeeListLoading: "sucess",
        allEmployeesList: action.payload,
      };

    case Actions.GET_ALL_EMPLOYEE_FAIL:
      return {
        ...state,
        getAllEmployeeListLoading: "fail",
        allEmployeesList: [],
      };

    case Actions.SET_USER_SELECTED_EMPLOYEE:
      return { ...state, userSelectedEmployee: action.payload };

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
