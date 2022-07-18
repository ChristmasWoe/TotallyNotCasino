import React from "react";
import "./ProfilePageHeader.css";
import avatar from "../../../sources/profile-logo.png";
import coinIcon from "../../../sources/coin.svg";

const ProfilePageHeader = () => {
  const profileData = {
    nickName: "Nickname",
    balance: "25000",
    avatar,
    id: "2343262134324",
  };
  const nickName = "Nickname";
  const balance = "25000";

  return (
    <div className="profile-header">
      <div className="profile-nickname-balance">
        <h3 className="profile-name">{profileData.nickName}</h3>
        <p className="balance">
          {profileData.balance}
          <img src={coinIcon} />
        </p>
      </div>
      <img src={profileData.avatar} className="avatar" />
      <div className="profile-id">ID: {profileData.id}</div>
    </div>
  );
};

export default ProfilePageHeader;
