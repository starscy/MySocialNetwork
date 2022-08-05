import Login from "./Login";
import { connect } from "react-redux";
import { logInThunk, logOutThunk } from "../../redux/reducers/authReducer";
import { setProfileInfoThunk } from "../../redux/reducers/profileReducer";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,
  };
};

const LoginContainer = connect(mapStateToProps, {
  logInThunk,
  logOutThunk,
  // setProfileInfoThunk,
})(Login);
export default LoginContainer;
