import React, { Component } from "react";
import "../Navbar/Navbar.css";
import logo from "../img/logo.png";
import profile from "../img/profile.png";

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
                <h4>Home</h4>
              </li>
              <li className="item">
                <h4>Pathway</h4>
              </li>
              <li className="item">
                <h4>Counselor</h4>
              </li>
              <li className="item">
                <h4>Learing</h4>
              </li>
              <li className="item">
                <h4>Community</h4>
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
