import { profile } from "../../api/api";

const ADD_POST = "ProfilePage/ADD_POST";
const DELETE_POST = "ProfilePage/DELETE_POST";
// const UPDATE_POST = "UPDATE_POST";
const SET_PROFILE_INFO = "ProfilePage/SET_PROFILE_INFO";
const IS_FETCHING = "ProfilePage/IS_FETCHING";
const GET_STATUS = "ProfilePage/GET_STATUS";
const SET_STATUS = "ProfilePage/SET_STATUS";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },

    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      userId: 2,
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
      userId: 2,
      id: 16,
      title:
        "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
      userId: 2,
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
      userId: 2,
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },

    {
      userId: 10,
      id: 100,
      title: "at nam consequatur ea labore ea harum",
      body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
    },
  ],

  isFetching: false,
  userProfile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        userId: 1,
        id: Math.random(),
        title: `Время: ${Date.now()}`,
        body: action.post.post,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.id)],
      };
    case SET_PROFILE_INFO:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case GET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
/////ACTIONS////////
export const actionAddPost = (post) => ({ type: ADD_POST, post });
export const deletePost = (postId) => ({ type: DELETE_POST, id: postId });
export const setProfileInfo = (profile) => ({
  type: SET_PROFILE_INFO,
  userProfile: profile,
});
export const toggleFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const getStatus = (status) => ({
  type: GET_STATUS,
  status,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export default profileReducer;

//////THUNK//////
export const addPostThunk = (post) => {
  return (dispatch) => {
    dispatch(actionAddPost(post));
  };
};
export const deletePostThunk = (postId) => {
  return (dispatch) => {
    dispatch(deletePost(postId));
  };
};
export const setProfileInfoThunk = (userId) => async (dispatch) => {
  dispatch(toggleFetching(true));
  const data = await profile.getProfile(userId);
  dispatch(toggleFetching(false));
  dispatch(setProfileInfo(data));
};
export const getStatusThunk = (userId) => async (dispatch) => {
  const data = await profile.getStatus(userId);
  dispatch(getStatus(data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
  const data = await profile.setStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
