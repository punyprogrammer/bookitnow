import {
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/auth/register", userData, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
