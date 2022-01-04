import * as actionTypes from "../constants/CartConstants";

const initialState = {
  items: {},
  totalAmount: 0,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const addedProduct = action.item;
      const productPrice = addedProduct.price;
      const productID = addedProduct.id;
      return {
        ...state,
        items: { ...state.items, [productID]: addedProduct },
      };
    default:
      return state;
  }
};
