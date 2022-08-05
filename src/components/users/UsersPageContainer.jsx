import {
  getUsersThunk,
  changePageThunk,
  followThunk,
  unfollowThunk,
} from "../../redux/reducers/usersReducer";
import { connect } from "react-redux";
import React from "react";
import UsersPage from "./UsersPage";
import Preloader from "../UI/preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  setUsers,
  setPageSize,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
  setIsDisabled,
} from "./usersSelectors";

class UsersPageClass extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunk(currentPage, pageSize);
  }

  changePage = (page) => {
    this.props.changePageThunk(page, this.props.pageSize);
  };

  followUser = (user) => {
    this.props.followThunk(user);
  };
  unfollowUser = (user) => {
    this.props.unfollowThunk(user);
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <UsersPage
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          changePage={this.changePage}
          isDisabled={this.props.isDisabled}
          followUser={this.followUser}
          unfollowUser={this.unfollowUser}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: setUsers(state),
    pageSize: setPageSize(state),
    totalUsersCount: setTotalUsersCount(state),
    currentPage: setCurrentPage(state),
    isFetching: setIsFetching(state),
    isDisabled: setIsDisabled(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsersThunk,
    changePageThunk,
    followThunk,
    unfollowThunk,
  }),
  withAuthRedirect
)(UsersPageClass);
