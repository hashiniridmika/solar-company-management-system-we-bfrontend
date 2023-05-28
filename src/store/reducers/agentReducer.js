import * as Actions from "../actions/agentAction";

const inisialState = {
  getAllAgentListLoading: "notStarted",
  allAgentList: [],
  userSelectedAgent: {},
  agentUpdateStatus: "notStarted",
  agentCreateStatus: "notStarted",
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

    case Actions.CREATE_AGENT_START:
      return { ...state, agentCreateStatus: "loading" };

    case Actions.CREATE_AGENT_SUCCESS:
      return {
        ...state,
        agentCreateStatus: "success",
      };

    case Actions.CREATE_AGENT_FAIL:
      return { ...state, agentCreateStatus: "fail" };

    default:
      return state;
  }
};

export default agentReducer;
