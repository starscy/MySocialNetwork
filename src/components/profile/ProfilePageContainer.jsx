import React from "react";
import {
  setProfileInfo,
  toggleFetching,
  setProfileInfoThunk,
  getStatusThunk,
  updateStatusThunk,
} from "../../redux/reducers/profileReducer";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.setProfileInfoThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <div>
        <ProfilePage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.ProfilePage.userProfile,
    isFetching: state.ProfilePage.isFetching,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileInfo,
    toggleFetching,
    setProfileInfoThunk,
    getStatusThunk,
    updateStatusThunk,
  }),
  // withAuthRedirect,
  withRouter
)(ProfilePageContainer);
