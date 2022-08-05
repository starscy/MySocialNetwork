import React from "react";
import PostContainer from "./posts/PostContainer";
import ProfileInfo from "./profile/ProfileInfo";

const ProfilePage = ({ userProfile, updateStatusThunk, status, ...props }) => {
  return (
    <div>
      <ProfileInfo
        userProfile={userProfile}
        updateStatusThunk={updateStatusThunk}
        status={status}
      />
      <PostContainer />
    </div>
  );
};

export default ProfilePage;
