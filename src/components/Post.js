import React from "react";
import { Card } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likePost, deletePosts } from "../actions/posts";
import CommentSection from "./CommentSection";
import PostHeader from "./PostHeader";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = () => {
    console.log("in delete");
    dispatch(deletePosts(post.id));
  };

  const likedPost = (e) => {
    // e.preventDefault();

    dispatch(likePost(post.id));
    console.log("in like");
  };
  console.log(post);
  return (
    <div className="d-flex flex-column justify-content-center m-3 post">
      <PostHeader post={post} />
      <div className="">
        {post.image !== null && (
          <img
            className="previewImage"
            src={"data:image/png;base64," + post.image}
            alt=""
          />
        )}
      </div>
      <CommentSection />
    </div>
  );
};

export default Post;
