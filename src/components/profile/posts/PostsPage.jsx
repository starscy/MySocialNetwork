import React, { createRef, useRef } from "react";
import Posts from "./Posts";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validators";
import MyInput from "../../UI/input/MyInput";

const maxLength100 = maxLength(100);
const postPostsForm = (props) => {
  // const { handleSubmit } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="post"
        component={MyInput}
        type="text"
        validate={[required, maxLength100]}
      />
      <button type="submit">Отправить пост</button>
    </form>
  );
};

const PostPostsReduxForm = reduxForm({ form: "postForm" })(postPostsForm);

const PostsPage = (props) => {
  const postPost = (post) => {
    props.addPostThunk(post);
  };
  return (
    <div>
      <PostPostsReduxForm onSubmit={postPost} />
      <Posts posts={props.posts.posts} />
    </div>
  );
};

export default PostsPage;
