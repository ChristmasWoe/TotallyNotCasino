import React from "react";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import "./ProfilePage.css";
import SubmitSettings from "./SubmitSettings/SubmitSettings";
import ProfileStats from "./ProfileStats/ProfileStats";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfilePageHeader />
      <ProfileSettings />
      <SubmitSettings />
      <ProfileStats />
    </div>
  );
};

export default ProfilePage;
