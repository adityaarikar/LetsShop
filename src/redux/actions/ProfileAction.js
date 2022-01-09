import * as actionTypes from "../constants/ProfileConstants";

export const userLogin = () => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: "",
      userEmailId: "",
      firstName: "",
      lastName: "",
      userProfile: "",
      token: "",
    },
  };
};

export const userLogout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
