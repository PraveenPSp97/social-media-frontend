import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import NewPost from "./components/NewPost";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
import { fetchUserDetails } from "./actions/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(fetchUserDetails());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
