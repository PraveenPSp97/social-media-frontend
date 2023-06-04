import React from "react";
import { useSelector } from "react-redux";

const Followers = () => {
  const { followers } = useSelector((state) => state.user);
  console.log(followers);
  return (
    <div className="d-flex " style={{ width: "200px" }}>
      {followers &&
        followers.map((follower) => (
          <div
            key={follower.name}
            className="d-flex flex-column m-2"
            style={{ color: "white" }}
          >
            <img
              src={"data:image/png;base64," + follower.profilePhoto}
              alt=""
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                postion: "absolute",
                marginTop: "50px",
                top: "20px",
              }}
            />
            <p>{follower.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Followers;
