import * as actionTypes from "../constants/ProfileConstants";

const initialState = {
  isUserLogedIn: false,
  userName: "",
  userEmailId: "",
  firstName: "",
  lastName: "",
  token: "",
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return {
        ...state,
        isUserLogedIn: false,
      };

    case actionTypes.LOGIN:
      return {
        ...state,
        isUserLogedIn: true,
      };

    default:
      return {
        ...state,
      };
  }
};
