import axios from "axios";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { postPost } from "../actions/posts";
import { useNavigate } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [imgUrl, setimgUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) formData.append("image", file);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("userId", 1);
    dispatch(postPost(formData));
    setimgUrl("");
    setBody("");
    setFile(null);
  };

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setFile(files);
    setimgUrl(URL.createObjectURL(files));
  };
  const handleSubmit1 = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      // formData.append("post", { title: title, body: body });
      // formData.append("body", JSON.stringify({ body, title }));

      formData.append("title", title);
      formData.append("body", body);

      const config = {
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8080/imageUpload",
        formData,
        config
      );

      const srcimg = base64ToImage(data.image);
      console.log("srcimg", srcimg);
      const dataURL = `data:image/png;base64,${data.image}`;
      setimgUrl(dataURL);
    } catch (error) {
      console.log(error);
    }
  };
  function base64ToImage(base64String) {
    // Create a new image element
    var img = new Image();
    img.src = "data:image/png;base64," + base64String;
    return img.src;
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      {imgUrl && (
        <div className="">
          <img className="previewImage" src={imgUrl} alt="" />
        </div>
      )}
      <div className="newPost d-flex justify-content-center">
        <FaUserFriends size={"30px"} className="icons" color="#f1dac4" />
        <input
          className="newpostInput"
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <label htmlFor="file">
          <MdAddAPhoto size={30} color="#f1dac4" className="icons" />
        </label>
        <input
          id="file"
          type="file"
          onChange={(event) => handleFileChange(event)}
          style={{ display: "none" }}
        />
        <RiSendPlane2Fill
          size={30}
          color="#f1dac4"
          className="icons"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </div>
    </div>
  );
};

export default NewPost;
