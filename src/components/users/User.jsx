import React from "react";
import cl from "../css/UsersPage.module.css";
import MyLink from "../UI/link/MyLink";

const User = ({ user, isDisabled, unfollowUser, followUser }) => {
  return (
    <>
      <div className="userBlock">
        <div className="userAvatarAndSub">
          <div className={cl.userAvatar}>
            {
              <MyLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : "https://avatarko.ru/img/kartinka/7/film_maska_6322.jpg"
                  }
                />
              </MyLink>
            }
          </div>
          <h3>{user.name}</h3>
          <p>{user.status}</p>
          {user.followed ? (
            <button
              disabled={isDisabled.some((id) => id === user.id)}
              onClick={() => {
                unfollowUser(user);
              }}
              className="subscribe"
            >
              Отписаться
            </button>
          ) : (
            <button
              disabled={isDisabled.some((id) => id === user.id)}
              onClick={() => {
                followUser(user);
              }}
              className="subscribe"
            >
              Подписаться
            </button>
          )}
        </div>
        <div className="userDescription"></div>
      </div>
    </>
  );
};

export default User;
