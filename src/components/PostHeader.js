import React from "react";
import logo from "../img/logo.jpg";
import { useSelector } from "react-redux";

const PostHeader = ({ post }) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="d-flex  p-2 ">
        <img
          src={"data:image/png;base64," + user.profilePhoto}
          alt=""
          className="profileImage"
        />
        <div className="d-flex  flex-column align-items-start">
          <span>{user.name}</span>
          <span style={{ fontSize: "small" }}>3hr</span>
        </div>
      </div>
      <div className="d-flex align-items-start p-2">
        <p className="text-start">{post.body}</p>
      </div>
    </>
  );
};

export default PostHeader;
