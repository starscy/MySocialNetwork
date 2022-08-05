import { getAuthenticationThunk } from "./authReducer";

const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

const initialState = {
  initialization: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        initialization: true,
      };
    default:
      return state;
  }
};
export default appReducer;

export const initializeSucces = () => ({
  type: INITIALIZE_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthenticationThunk());
  dispatch(initializeSucces());
};
