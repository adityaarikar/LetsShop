import React from "react";
import { useSelector } from "react-redux";
import LoginContainer from "../UI/LoginContainer";
import RegisterContainer from "../UI/RegisterContainer";
import classes from "./Profile.module.css";

const ProfileInfo = (props) => {
  return <div>Profile Info</div>;
};

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className={classes.container}>
      {profile.isUserLogedIn ? (
        <ProfileInfo />
      ) : (
        <div className={classes.loginOrRegister}>
          <LoginContainer />
          <RegisterContainer />
        </div>
      )}
    </div>
  );
};

export default Profile;
