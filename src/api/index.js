import axios from "axios";

const url = "http://localhost:8080/posts";

const userUrl = "http://localhost:8080/";
// http://localhost:8080/getUserById/1
export const fetchPosts = async () => {
  // axios.get(url).then(res=>console.log('data',res.data))
  const post = await axios.get(url);
  console.log("post", post);
  return post.data;
};

export const postPost = async (post) => {
  const config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
  };
  const newPost = await axios.post(url, post, config);
  console.log("in post api", newPost.data);
  return newPost.data;
};

export const likePost = async (id) => {
  const like = await axios.put(`${url}/likePost/${id}`, id);
  console.log(like);
  return id;
};

export const deletePost = async (id) => {
  const deleted = await axios.delete(`${url}/deletePost/${id}`, id);
  return id;
};

export const getUserDetails = async (id) => {
  const user = await axios.get("http://localhost:8080/getUserById/1");
  console.log("inside User Details", user);
  return user.data;
};
