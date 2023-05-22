import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profile.jpg";
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = import.meta.env.VITE_PUBLIC_FOLDER;
  const ProfilePage = false;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage" />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname} </span>
        <span> {user.worksAt ? user.worksAt : "Write About YourSelf"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {/* {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                  posts.filter((post) => post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>
            </>
          )} */}
        </div>
        <hr />
      </div>
      {location === "ProfilePage" ? "" : <span>
        <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          My Profile
        </Link></span>}
    </div>
  );
};

export default ProfileCard;
