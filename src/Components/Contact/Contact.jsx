import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="cntct">
        <div className="container">
          <div className="left">
            <h3 className="heading">Get In Touch</h3>
            <p className="text">We are here for you! How can we help?</p>
            <form action="#">
              <div className="inputBox">
                <input
                  type="text"
                  className="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  className="name"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="inputBox">
                <textarea
                  type="text"
                  className="message"
                  name="message"
                  placeholder="Enter your message ..."
                ></textarea>
              </div>
              <button className="btns">Submit</button>
            </form>
          </div>
          <div className="right">
            <h3 className="heading">Contact Us</h3>
            <p className="text">
              We are open for any suggestion or just to have a chat
            </p>
            <div className="contact-info">
              <div className="infoBox">
                <div className="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="text">
                  <a href="address:Pin: 144411, Phagwara, Punjab, India">
                    Pin: 144411, Phagwara, Punjab, India
                  </a>
                </div>
              </div>

              <div className="infoBox">
                <div className="icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="text">
                  <a href="tel:+91 952-009-1069">952-009-1069</a>
                </div>
              </div>

              <div className="infoBox">
                <div className="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="text">
                  <a href="mailto:elecV@gmail.com">elecV@gmail.com</a>
                </div>
              </div>

              <div className="infoBox">
                <div className="icon">
                  <i class="fa-solid fa-earth-asia"></i>
                </div>
                <div className="text">
                  <a href="siteto:yourSite.com">yourSite.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
