import * as Actions from "../actions/agentAction";

const inisialState = {
  getAllAgentListLoading: "notStarted",
  allAgentList: [],
  userSelectedAgent: {},
  agentUpdateStatus: "notStarted",
};

const agentReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_AGENTS_LOADING:
      return { ...state, getAllAgentListLoading: "loading" };

    case Actions.GET_ALL_AGENTS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllAgentListLoading: "sucess",
        allAgentList: action.payload,
      };

    case Actions.GET_ALL_AGENTS_FAIL:
      return {
        ...state,
        getAllAgentListLoading: "fail",
        allAgentList: [],
      };

    case Actions.SET_USER_SELECTED_AGENT:
      return { ...state, userSelectedAgent: action.payload };

    case Actions.UPDATE_AGENTS_SUCESS:
      return { ...state, agentUpdateStatus: "completed" };

    case Actions.CLEAR_AGENTS_UPDATE_STATUS:
      return { ...state, agentUpdateStatus: "notStarted" };

    default:
      return state;
  }
};

export default agentReducer;
