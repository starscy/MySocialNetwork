import React from "react";
import NavBar from "./NavBar";
import { setUserData, logOutThunk } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";

class NavBarContainer extends React.Component {
  render() {
    return <NavBar auth={this.props.auth} logOut={this.props.logOutThunk} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  setUserData,
  logOutThunk,
})(NavBarContainer);
