import {
  updateMessageListThunk,
  actionAddMessageThunk,
} from "../../redux/reducers/chatReducer";
import { connect } from "react-redux";
import Messages from "./Messages";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.chatPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    actionAddMessageThunk,
  }),
  withAuthRedirect
)(Messages);
