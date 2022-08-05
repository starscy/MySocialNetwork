import { connect } from "react-redux";
import { addPostThunk } from "../../../redux/reducers/profileReducer";
import PostsPage from "./PostsPage";

const mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage,
  };
};

const PostContainer = connect(mapStateToProps, {
  addPostThunk,
})(PostsPage);

export default PostContainer;
