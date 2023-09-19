import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="left">
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <span>Clark, MO 65243</span>
        </div>
        <div className="mid">
          <h3>AROUND THE WEB</h3>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>
        <div className="right">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="copy">Copyright © Your Website 2021</div>
    </div>
  );
}
export default Footer;
