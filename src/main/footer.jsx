import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-layer">
        <div
          className=" footeeng"
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   textAlign: "center",
          //   paddingLeft: "90px",
          // }}
        >
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 className="foottitle">Quick links</h3>
            <div className="footdisplay">
              <Link className="footlinks" to="/about">
                About us
              </Link>
              <Link className="footlinks" to="/services">
                Services
              </Link>

              <Link className="footlinks" to="/Rwanda-Itineraries">
                {" "}
                Iteneraries
              </Link>
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 className="foottitle">Destinations</h3>
            <Link className="footlinks" to="/rwanda">
              Rwanda
            </Link>
            <Link className="footlinks" to="/uganda">
              Uganda
            </Link>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 className="foottitle">Contact us</h3>
            <p className="footlinks">
              <HiOutlineOfficeBuilding className="icon" />
              <span className="ml-4">Kigali, Norrsken</span>
            </p>
            <p className="footlinks">
              <MdContactPhone className="icon" />
              <span>+250793766308 / +250780580503</span>
            </p>
            <p className="footlinks">
              <MdMarkEmailUnread className="icon" />
              <span>trumpettoursrwanda@gmail.com</span>
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 className="foottitle">Follow us</h3>
            <div style={{ display: "flex" }}>
              {" "}
              <a
                className="footlinks  "
                href="https://www.instagram.com/trumpet_tours
"
              >
                <LuInstagram className="icon" />
              </a>
              <a
                className="footlinks"
                href="https://www.facebook.com/profile.php?id=61556827773336&mibextid=LQQJ4d"
              >
                <FaFacebook className="icon" />
              </a>
              <a
                className="footlinks"
                href="https://www.linkedin.com/in/trumpet-tours-rwanda-6866682b7/
"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="downso">
          <p>Trumpet Tours © 2024 All Right Reserved</p>{" "}
          <p className="cayu">Powered by Sekadi Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
