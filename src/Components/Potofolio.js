import React from "react";
import ImgOne from ".././images/poert1.png";
import ImgTwo from ".././images/port2.png";
import ImgThree from ".././images/port3.png";
import "./Potofolio.css";
function Potofolio() {
  return (
    <div className="potofolio">
      <h2>Potofolio Component</h2>
      <i className="fa-solid fa-star"></i>
      <div className="images">
        <div className="one">
          <img src={ImgOne} alt="" />
          <img src={ImgOne} alt="" />
        </div>
        <div className="two">
          <img src={ImgTwo} alt="" />
          <img src={ImgTwo} alt="" />
        </div>
        <div className="three">
          <img src={ImgThree} alt="" />
          <img src={ImgThree} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Potofolio;
