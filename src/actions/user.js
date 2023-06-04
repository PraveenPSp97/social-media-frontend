import * as api from "../api";
export const fetchUserDetails = () => async (dispatch) => {
  try {
    const user = await api.getUserDetails();
    console.log("user", user);
    dispatch({ type: "GET_USER", payload: user });
  } catch (e) {}
};
