import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin, signout } from "../actions/singin";
import { Col, Row } from "react-bootstrap";
import logo from "../img/logo.jpg";
import { MdHome } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
const Navbar = () => {
  console.log("in Nav");
  // const signIN=useSelector((state)=>state.signIN)

  const dispatch = useDispatch();
  // const sign=false;
  const sign = useSelector((state) => state.signIn);
  const handleSignIn = (e) => {
    console.log("in sign in");
    if (!sign) dispatch(signin());
    else dispatch(signout());
  };

  console.log("in nav", sign);
  return (
    <div
      className="navbar"
      style={{ position: "sticky", top: 0, width: "100vw" }}
    >
      <Col>
        <img src={logo} alt="" style={{ height: "30px" }} />
      </Col>
      <Col>
        <input type="search" placeholder="Search..." className="search" />
      </Col>
      <Col>
        <MdHome
          size={"30px"}
          className="icons"
          style={{ opacity: "1" }}
        ></MdHome>
        <FaUserFriends size={"30px"} className="icons" />
        <IoMdNotifications size={"25px"} className="icons" />
        <BsChatLeftFill size={"25px"} className="icons" />
      </Col>
    </div>
  );
};

export default Navbar;
