const ADD_MESSAGE = "chatPage/ADD_MESSAGE";

const initialState = {
  chats: [
    {
      id: "Manica1test",
      name: "Manica",
      messages: [
        { id: 1, text: "First Message from Manica", author: "Manica" },
        { id: 2, text: "First Message from Me to Manica", author: "Me" },
      ],
    },
    {
      id: "Friends1test",
      name: "Friends",
      messages: [
        { id: 1, text: "First Message from Friends", author: "Friends" },
        { id: 2, text: "First Message from Me to Friends", author: "Me" },
      ],
    },
    {
      id: "Family1test",
      name: "Family",
      messages: [
        { id: 1, text: "First Message from Family", author: "Family" },
        { id: 2, text: "First Message from Me to Family", author: "Me" },
      ],
    },
  ],

  messages: [
    { id: 1, text: "First Message from Family", author: "Family" },
    { id: 2, text: "First Message from Me to Family", author: "Me" },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = { id: Date.now(), text: action.message.message };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export default chatReducer;

///////ACTIONS//////
export const actionAddMessage = (message) => ({ type: ADD_MESSAGE, message });

/////THUNK////////
export const actionAddMessageThunk = (message) => (dispatch) => {
  dispatch(actionAddMessage(message));
};
