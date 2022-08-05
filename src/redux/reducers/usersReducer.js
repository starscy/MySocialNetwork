import { followUnfollow, usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../components/utils/objectHelper";

const SET_USERS = "usersPage/SET_USERS";
const FOLLOW = "usersPage/FOLLOW";
const UNFOLLOW = "usersPage/UNFOLLOW";
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_COUNT_USERS = "usersPage/SET_COUNT_USERS";
const IS_FETCHING = "usersPage/IS_FETCHING";
const TOGGLE_IS_DISABLED = "usersPage/TOGGLE_IS_DISABLED";

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 100,
  currentPage: 1,
  isFetching: false,
  isDisabled: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_COUNT_USERS:
      return {
        ...state,
        totalUsersCount: action.countUsers,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_DISABLED:
      return {
        ...state,
        isDisabled: action.isFetching
          ? [...state.isDisabled, action.userId]
          : state.isDisabled.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};
export default usersReducer;

///ACTION CREATERS//////
export const setUsers = (users) => ({
  type: SET_USERS,
  users: users,
});
export const follow = (id) => ({ type: FOLLOW, userId: id });
export const unfollow = (id) => ({ type: UNFOLLOW, userId: id });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const totalCount = (countUsers) => ({
  type: SET_COUNT_USERS,
  countUsers: countUsers,
});
export const toggleFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const toggleIsDisabled = (isFetching, userId) => ({
  type: TOGGLE_IS_DISABLED,
  userId,
  isFetching,
});

/////helping FUNCTIONS //////////////////
const folUnfol = async (dispatch, user, methodApi, actionCreator) => {
  dispatch(toggleFetching(true));
  dispatch(toggleIsDisabled(true, user.id));
  const data = await methodApi(user.id);
  if (data.resultCode === 0) {
    dispatch(toggleFetching(false));
    dispatch(actionCreator(user.id));
  }
  dispatch(toggleIsDisabled(false, user.id));
};

const setPage = async (dispatch, currentPage, pageSize) => {
  dispatch(toggleFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(totalCount(data.totalCount));
};
//

////THUNK/////
export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  setPage(dispatch, currentPage, pageSize);
};
export const changePageThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage));
  setPage(dispatch, currentPage, pageSize);
};

export const unfollowThunk = (user) => async (dispatch) => {
  folUnfol(
    dispatch,
    user,
    followUnfollow.unfollow.bind(followUnfollow),
    unfollow
  );
};
export const followThunk = (user) => async (dispatch) => {
  folUnfol(dispatch, user, followUnfollow.follow.bind(followUnfollow), follow);
};
