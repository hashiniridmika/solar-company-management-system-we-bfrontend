import * as Actions from "../actions/agentAction";

const inisialState = {
  getAllAgentListLoading: "notStarted",
  allAgentList: [],
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

    default:
      return state;
  }
};

export default agentReducer;
