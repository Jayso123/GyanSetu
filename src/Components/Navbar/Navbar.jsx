import React, { Component } from "react";
import "../Navbar/Navbar.css";
import logo from "../img/logo.png";
import profile from "../img/profile.png";
import Community from "./Community";
import Pathway from "./Pathway";
import Counselor from "./Counselor";
import Learning from "./Learning";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" className="Logo" />
          </div>
          <div className="center">
            <ul className="list">
              <li className="item">
                <a href="/">
                  <h4>Home</h4>
                </a>
              </li>
              <li className="item">
                <a href={Pathway}>
                  <h4>Pathway</h4>
                </a>
              </li>
              <li className="item">
                <a href={Counselor}>
                  <h4>Counselor</h4>
                </a>
              </li>
              <li className="item">
                <a href={Learning}>
                  <h4>Learing</h4>
                </a>
              </li>
              <li className="item">
                <a href={Community}>
                  <h4>Community</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
