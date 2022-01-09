import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { CartReducer } from "./reducers/CartReducers";
import { ProfileReducer } from "./reducers/ProfileReducer";

const reducer = combineReducers({
  cart: CartReducer,
  profile: ProfileReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
