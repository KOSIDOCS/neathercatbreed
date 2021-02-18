import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import errorsReducer from "../reducers/errors";
import profileReducer from "../reducers/breeds";
import imageReducer from "../reducers/images";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    breeds: profileReducer,
    errors: errorsReducer,
    images: imageReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
