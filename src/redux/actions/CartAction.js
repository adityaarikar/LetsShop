import * as actionTypes from "../constants/CartConstants";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item: item,
  };
};
