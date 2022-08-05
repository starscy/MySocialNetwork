import React from "react";
import Preloader from "../../UI/preloader/Preloader";
import cl from "../profile/ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ userProfile, updateStatusThunk, status }) => {
  if (!userProfile) {
    return <Preloader />;
  }

  return (
    <div className={cl.main}>
      <img src={userProfile.photos.small} alt="user ava" />
      <ProfileStatus
        userProfile={userProfile}
        updateStatusThunk={updateStatusThunk}
        status={status}
      />
      <p>Имя пользователя:</p>
      <h2>{userProfile.fullName}</h2>
      <p>"{userProfile.aboutMe}"</p>
      <div>
        {userProfile.lookingForAJob ? (
          <div className={cl.lookingForJob} data-title="Ищет работу">
            <img src="./img/lookingForJob.gif" alt="lookingForJob.gif" />
          </div>
        ) : (
          <p>Не ищу работу</p>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
