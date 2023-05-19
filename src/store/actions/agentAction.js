import axios from "axios";
//view
export const GET_ALL_AGENTS_LOADING = "GET_ALL_AGENTS_LOADING";
export const GET_ALL_AGENTS_SUCESS = "GET_ALL_AGENTS_SUCESS";
export const GET_ALL_AGENTS_FAIL = "GET_ALL_AGENTS_FAIL";

export const SET_USER_SELECTED_AGENT = "SET_USER_SELECTED_AGENT";

//update
export const UPDATE_AGENTS_START = "UPDATE_AGENTS_START";
export const UPDATE_AGENTS_SUCESS = "UPDATE_AGENTS_SUCESS";
export const UPDATE_AGENTS_FAIL = "UPDATE_AGENTS_FAIL";

export const CLEAR_AGENTS_UPDATE_STATUS = "CLEAR_AGENTS_UPDATE_STATUS";

export const getAllAgents = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_AGENTS_LOADING });
    axios
      .get("https://plymouthfinal.live:5002/agent/view")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: GET_ALL_AGENTS_SUCESS, payload: response.data.agent });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_AGENTS_FAIL });
      });
  };
};

export const setUserSelectedAgent = (agent) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_AGENT, payload: agent });
  };
};

//update
export const updateAgent = (agent) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_AGENTS_START });
    axios
      .post("https://plymouthfinal.live:5002/agent/update", { agent })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: UPDATE_AGENTS_SUCESS, payload: response.data.agent });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_AGENTS_FAIL });
      });
  };
};

export const clearAgentUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_AGENTS_UPDATE_STATUS });
  };
};
