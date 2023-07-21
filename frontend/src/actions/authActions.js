import { axios } from "../utils";

import {
  REGISTER_USER,
  SET_CURRENT_USER,
  RESET_USER,
  LOGIN_ERROR,
  REGISTER_ERROR,
  RESET_ERROR,

} from "./types";
import Swal from "sweetalert2";
import setAuthToken from "../utilities/setAuthToken";
import jwt_decode from "jwt-decode";

// register function

export const registerUser = (userDetails, history) => (dispatch) => {
    console.log(userDetails);
  let url = `/users`;
  axios
    .post(url, userDetails)
    .then((response) => {
      console.log(userDetails);
      Swal.fire("Success", "Account successfully created - now log in", "success");
      history.push("/login");
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data);
      if (error.response) {
        if (error.response.data.error) {
          Swal.fire("Error", "Countercheck your details to make sure they are right!", "error");

          dispatch({
            type: REGISTER_ERROR,
            payload: error.response.data.error,
          });
        }
      } else {
        Swal.fire("Error", "Oops! Something went wrong!", "error");
        dispatch({
          type: REGISTER_ERROR,
          payload: "Oops! Something went wrong!",
        });
      }
    });
};

// login function

export const loginUser = (userDetails, history) => (dispatch) => {
  let url = `/users/sign-in`;
  axios
    .post(url, userDetails)
    .then((response) => {
      console.log(response.data);
      const  token  = response.data;

      console.log(token)
      //set token to local storage(browser)
      localStorage.setItem("token", token);
      //set token to auth headers
      setAuthToken(token);

      //decode jwt token
      const decoded = jwt_decode(token);

      // console.log(decoded);

      //set current user
      dispatch(setCurrentUser(decoded));
      //redirect to landing
      history.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.response);
      if (error.response) {
        if (error.response.data.error) {
          Swal.fire("Error", error.response.data.error, "error");
          dispatch({
            type: LOGIN_ERROR,
            payload: error.response.data.error,
          });
        }
      } else {
        Swal.fire("Error", "Oops! Something went wrong!", "error");
        dispatch({
          type: LOGIN_ERROR,
          payload: "Oops! Something went wrong!",
        });
      }
    });
};

// set current user
export const setCurrentUser = (decodedjwt) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedjwt,
  };
};

//logout
export const logoutUser = () => (dispatch) => {
  //remove token from local storage
  localStorage.removeItem("token");
  //remove auth header for future requests
  setAuthToken(false);
  //set current user to empty object
  dispatch(setCurrentUser({}));

};

//reset
export const resetUser = (userDetails, history) => (dispatch) => {
  let url = `users/reset`;
  axios
    .patch(url, userDetails)
    .then((response) => {
      Swal.fire("Success", response.data.message, "success");
      dispatch({
        type: RESET_USER,
        payload: response.data,
      });
      history.push("/");
    })
    .catch((error) => {
      // console.log(error.response);
      if (error.response) {
        if (error.response.data.error) {
          Swal.fire("Error", "User doesn't exist!", "error");

          dispatch({
            type: RESET_ERROR,
            payload: error.response.data.error,
          });
        }
      } else {
        Swal.fire("Error", "Oops! Something went wrong!", "error");
        dispatch({
          type: RESET_ERROR,
          payload: "Oops! Something went wrong!",
        });
      }
    });
};
