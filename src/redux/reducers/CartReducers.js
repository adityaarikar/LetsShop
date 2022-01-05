import * as actionTypes from "../constants/CartConstants";

const initialState = {
  items: {},
  totalAmount: 0,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const addedProduct = action.item;
      // const productPrice = addedProduct.price;
      const productID = addedProduct.id;
      return {
        ...state,
        items: { ...state.items, [productID]: addedProduct },
      };
    case actionTypes.REMOVE_FROM_CART:
      const productToRemove = action.item.id;
      let updatedCart;
      updatedCart = { ...state.items };
      delete updatedCart[productToRemove];
      return {
        ...state,
        items: updatedCart,
      };
    default:
      return state;
  }
};
