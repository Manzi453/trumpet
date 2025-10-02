import React from "react";
import Navbar from "../main/navbars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Header = ({
  header1,
  header2,
  header3,
  aha,
  overlay,
  headerImage,
  btncss,
  imagehome1,
  imagehome2,
  imagehome3,
  imagehome4,
  imageaboutus,
  imagerwanda,
  imageuganda,
  imageitenaries,
  imagecontact,
  click,
}) => {
  const images = [imagehome1, imagehome2, imagehome3, imagehome4];
  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <header className="header">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              alt="Header Image"
              className={headerImage}
            />
          </div>
        ))}
      </Slider>

      <div className={overlay}>
        <div className="contentheader">
          <p className="headwild">{header1}</p>
          <h1 className="heademanini">
            {header2} <span className="ahayu">{aha}</span>
          </h1>{" "}
          <h3 className="yego"></h3>
          <p className="headwildy">{header3}</p>
          <div className={btncss} onClick={click}>
            <button className="btnbook">Explore </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
