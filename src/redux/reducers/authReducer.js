import { stopSubmit } from "redux-form";
import { authApi } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const IS_FETCHING = "auth/IS_FETCHING";
const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const toggleFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const logInAC = (email, password, remember = false) => ({
  type: LOGIN,
  payload: { email, password, remember },
});

export default authReducer;

export const getAuthenticationThunk = () => async (dispatch) => {
  const data = await authApi.getAuth();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const logInThunk =
  ({ email, password, remember }) =>
  async (dispatch) => {
    const data = await authApi.logIn(email, password, remember);
    if (data.resultCode === 0) {
      dispatch(logInAC());
      dispatch(getAuthenticationThunk());
    } else {
      let errorText =
        data.messages.length > 0 ? data.messages[0] : "some error";
      dispatch(stopSubmit("login", { _error: errorText }));
    }
  };

export const logOutThunk = () => async (dispatch) => {
  const data = await authApi.logOut();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
