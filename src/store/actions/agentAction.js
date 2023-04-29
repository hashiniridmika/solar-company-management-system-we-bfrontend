import axios from "axios";

export const GET_ALL_AGENTS_LOADING = "GET_ALL_AGENTS_LOADING";
export const GET_ALL_AGENTS_SUCESS = "GET_ALL_AGENTS_SUCESS";
export const GET_ALL_AGENTS_FAIL = "GET_ALL_AGENTS_FAIL";

export const getAllAgents = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_AGENTS_LOADING });
    axios
      .get("http://localhost:5002/agent/view")
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
