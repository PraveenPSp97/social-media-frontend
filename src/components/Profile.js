import React from "react";
import logo from "../img/logo.jpg";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log("user Profile", user.name);
  return (
    <div style={{ color: "white", width: "200px", borderRadius: "10px" }}>
      <div style={{ height: "70px", backgroundColor: "white" }}>
        <img
          src={"data:image/png;base64," + user.profilePhoto}
          alt=""
          style={{
            borderRadius: "50%",
            width: "70px",
            postion: "absolute",
            marginTop: "50px",
            top: "20px",
          }}
        />
      </div>
      <div
        className="profileDetails"
        style={{
          height: "150px",
          paddingTop: "50px",
          borderRadius: "0  0 10px 10px",
        }}
      >
        {user.name && (
          <>
            <h4>{user.name}</h4>
            <h6>Followers {user.followers.length}</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
