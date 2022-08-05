import chatReducer from "./reducers/chatReducer";
import profileReducer from "./reducers/profileReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
  ProfilePage: profileReducer,
  chatPage: chatReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store = store;
export default store;
