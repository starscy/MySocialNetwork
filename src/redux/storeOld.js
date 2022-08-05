import chatReducer from "./reducers/chatReducer";
import profileReducer from "./reducers/profileReducer";

const store = {
  _state: {
    chatPage: {
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
      newMessage: "",
    },
    ProfilePage: {
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
      newPost: "",
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerender = observer;
  },

  _rerender() {
    console.log("state changed");
  },
  dispatch(action) {
    this._state.chatPage = chatReducer(this._state.chatPage, action);
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._rerender(this._state);
  },
};

window.store = store;
export default store;
