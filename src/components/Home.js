import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import NewPost from "./NewPost";
import Profile from "./Profile";
import Followers from "./Followers";

const Home = () => {
  const post1 = useSelector((state) => console.log("state in Home", state));
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  console.log("in HOme", posts, user);

  return (
    <div style={{ backgroundColor: "#152238" }}>
      <NewPost />
      <div className="d-flex justify-content-around align-items-top">
        {user && <Profile />}
        <div style={{ backgroundColor: "#152238" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "0",
              margin: "0",
              backgroundColor: "#152238",
              flexDirection: "column",
              color: "white",
              alignItems: "center",
            }}
          >
            {posts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </div>
        <Followers />
      </div>
    </div>
  );
};

export default Home;
