import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiSendPlaneFill } from "react-icons/ri";

const CommentSection = () => {
  return (
    <div
      className="d-flex justify-content-between p-3"
      style={{ height: "5rem", alignItems: "center" }}
    >
      <div className="comment">
        <AiOutlineLike size={20} id="like" className="icons" />
        <span>Like</span>
      </div>
      <div className="comment">
        <GoComment size={20} id="like" className="icons" />
        <span>Comment</span>
      </div>
      <div className="comment">
        <RiSendPlaneFill size={20} id="like" className="icons" />
        <span>Share</span>
      </div>
    </div>
  );
};

export default CommentSection;
