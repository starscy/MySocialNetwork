import profileReducer, { actionAddPost, deletePost } from "../profileReducer";

test("post lenght shoud be added", () => {
  ////1 data
  let action = actionAddPost("test post");
  let state = {
    posts: [
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
  };
  ///2 action
  let newState = profileReducer(state, action);
  ///3 expection
  expect(newState.posts.length).toBe(5);
});

test("delete post", () => {
  let action = deletePost(16);
  let state = {
    posts: [
      {
        userId: 2,
        id: 16,
        title:
          " 1111 sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
      },
      {
        userId: 2,
        id: 17,
        title: " 2222 fugit voluptas sed molestias voluptatem provident",
        body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
      },
      {
        userId: 2,
        id: 18,
        title: "3333 voluptate et itaque vero tempora molestiae",
        body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
      },

      {
        userId: 10,
        id: 100,
        title: "44444 at nam consequatur ea labore ea harum",
        body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
      },
    ],
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
