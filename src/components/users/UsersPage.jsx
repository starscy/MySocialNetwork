import React from "react";
import cl from "../css/UsersPage.module.css";
import MyLink from "../UI/link/MyLink";
import Paginator from "../UI/paginator/Paginator.jsx";
import User from "./User";

const UsersPage = ({
  totalUsersCount,
  pageSize,
  changePage,
  currentPage,
  followUser,
  unfollowUser,
  isDisabled,
  users,
}) => {
  return (
    <>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        changePage={changePage}
        currentPage={currentPage}
      />
      <div className={cl.mainPage}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            isDisabled={isDisabled}
            unfollowUser={unfollowUser}
            followUser={followUser}
          />
        ))}
      </div>
    </>
  );
};

export default UsersPage;
