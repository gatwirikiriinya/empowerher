import axios from "axios";
import { baseURL } from "../config/keys";

// console.log(baseURL);

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export default axios;
