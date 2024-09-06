import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Homepage/Homepage.css";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import pathway from "../img/card1.png";
import pie from "../img/piechart.png";
import clg from "../img/clg.png";

function Homepage() {
  return (
    <div>
      <Navbar />

      <div className="display">
        <div className="searchbox">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search..."
          />
          <IoIosSearch className="searchbtn" />
        </div>
        <br />
        <br />
        <div className="card-display">
          <div className="card1">
            <div className="text">
              <h3>Pathway</h3>
            </div>
            <div className="textarea">
              <h4 className="area">
                Our Career Pathways feature is designed to provide you with a
                personalized roadmap, guiding you through each step of your
                academic and professional development.
              </h4>
            </div>
            <div className="explore">
              <h5 className="btn">
                Explore <FaArrowRightLong className="arrow" />
              </h5>
            </div>
            <hr className="hr" />
            <div className="img">
              <img src={pathway} alt="pathway" className="pathway" />
            </div>
          </div>
          <br />
          <br />
          <div className="card1">
            <div className="text">
              <h3>Trending</h3>
            </div>
            <div className="textarea">
              <h4 className="area">
                Our Trending Job Markets feature keeps you up-to-date with the
                most in-demand industries and roles, helping you align your
                career path with the opportunities of the future.
              </h4>
            </div>
            <div className="explore">
              <h5 className="btn">
                Explore <FaArrowRightLong className="arrow" />
              </h5>
            </div>
            <hr className="hr" />
            <div className="img">
              <img src={pie} alt="pathway" className="pie" />
            </div>
          </div>
          <br />
          <br />
          <div className="card1">
            <div className="text">
              <h3>Top Colleges</h3>
            </div>
            <div className="textarea">
              <h4 className="area">
                Our Top Colleges feature provides you with comprehensive
                insights into the best institutions worldwide, helping you make
                an informed decision about where to pursue your education.
              </h4>
            </div>
            <div className="explore">
              <h5 className="btn">
                Explore <FaArrowRightLong className="arrow" />
              </h5>
            </div>
            <hr className="hr" />
            <div className="img">
              <img src={clg} alt="pathway" className="clg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
