import axios from "../utils/axios";

const setAuthToken = (token) => {
  if (token) {
    //apply to every request ---check the header name from the given end point
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    //delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;