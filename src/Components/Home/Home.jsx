import React from "react";
import "./Home.css";
import homeImg from "../../images/homeIMG/home.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="homeContainer">
          <div className="homeDetail">
            <h1>Electric Vehicle Portal</h1>
            <p>
              Explore the future of transportation with our comprehensive
              Electric Vehicle Portal. Dive into detailed information about
              electric vehicles, uncovering their advantages, benefits, and
              sustainable solutions. Learn about the latest industry policies,
              access valuable resources, and stay informed with up-to-date
              statistics. At Electric Vehicle Portal, we are committed to
              providing you with the knowledge and insights to make informed
              decisions about embracing the electric revolution. Join us in
              shaping a cleaner, greener tomorrow.
            </p>
          </div>
          <div className="homeLeft">
            <div className="homeImg">
              <img src={homeImg} alt="" />
            </div>
            <div className="homeBtn">
              <NavLink to="/about">
                <button className="primary-btn">
                  GET STARTED<i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </NavLink>

              <NavLink to="/contact">
                <button>
                  CONTACT US <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};
export default Home;
