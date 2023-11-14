import React from "react";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import Head from "./Head";

const Navbar = () => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <>
      {/* <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  EV
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        exact
                        activeClassName="menu_active"
                        to="/"
                        className="nav-link"
                        aria-current="page"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/about"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/benefits"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Benefits
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/statistics"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Statistics
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/resources"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Resources
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/solutions"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Solutions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        to="/contact"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={scrollToTop}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div> */}

      {/* ____________________________________________________________________________________________________ */}
      <Head />
      <navbar className="navbar">
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link exact to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/benefits">Benefits</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
          </ul>
        </nav>
        <div className="start">
          <div className="button"><Link to="/contact">Contact Us</Link></div>
        </div>
      </navbar>
    </>
  );
};
export default Navbar;
