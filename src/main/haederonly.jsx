import React from "react";
import Navbar from "../main/navbars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeaderOnly = ({
  header1,
  header2,
  header3,
  overlay,
  headerImage,
  image,
  btncss,
}) => {
  return (
    <header className="header">
      <img
        src={image}
        alt={"slide"}
        alt="Header Image"
        className={headerImage}
      />

      <div className={overlay}>
        <div className="contentheader">
          <h3>
            {header1} <br />
          </h3>
        </div>
      </div>
    </header>
  );
};

export default HeaderOnly;
