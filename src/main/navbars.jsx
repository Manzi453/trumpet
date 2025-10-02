import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "./button";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [opentoogle, setopentoogle] = useState(false);
  const [active, setActive] = useState(
    localStorage.getItem("activeNavItem") || "home"
  );

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
    setopentoogle(false);
  };

  const handleOpen = () => {
    setopentoogle(true);
  };
  
  const handleClose = () => {
    setopentoogle(false);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About us ", to: "/about" },
    { label: "Services", to: "/services" },
    {
      label: "Destinations",
      sublinks: [
        { to: "/Rwanda", label: "Rwanda" },
        { to: "/Uganda", label: "Uganda" },
      ],
    },
    {
      label: "Itineraries",
      sublinks: [
        { to: "/Rwanda-Itineraries", label: "Rwanda " },
        { to: "/Uganda-Itineraries", label: "Uganda " },
        { to: "/Packages", label: "Packages " },
      ],
    },
    { label: "Contact us", to: "/contact" },
  ];
  
  const goTODoc = () => {
    window.location.assign(
      "https://docs.google.com/forms/d/e/1FAIpQLSf2WGtPQWyZGgFisJ-Wl2lnYghkCaklYo-kmvXYGsO11t5f-A/viewform?embedded=true"
    );
  };
  
  return (
    <nav className="navbar-container" role="navigation" aria-label="Main navigation">
      <div className="logo-container">
        <img src="/images/trumps.png" alt="Trumpet Tours Logo" />
      </div>
      <p className="tours">TRUMPET TOURS</p>

      {opentoogle ? (
        <button
          className="onltoogle"
          type="button"
          onClick={handleClose}
          aria-label="Close menu"
          aria-expanded="true"
        >
          <IoCloseSharp className="iconyu" />
        </button>
      ) : (
        <button
          className="onltoogle"
          type="button"
          onClick={handleOpen}
          aria-label="Open menu"
          aria-expanded="false"
        >
          <TiThMenu className="iconyu" />
        </button>
      )}

      <div className="nav-links-container">
        <ul role="menubar">
          {navLinks.map((link, index) => (
            <li
              key={link.to}
              className={`relative group subtile${
                active === link.label.toLowerCase() ? "group-hover:flex" : ""
              }`}
              role="none"
            >
              <Link
                to={link.to}
                className={`nav-link ${activeLink === index ? "active" : ""}`}
                onClick={() => handleNavLinkClick(index)}
                role="menuitem"
                aria-current={activeLink === index ? "page" : undefined}
              >
                {link.label}
              </Link>
              {link.sublinks && (
                <div className="dropdown-content" role="menu" aria-label={`${link.label} submenu`}>
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.to} className="drop" role="none">
                      <Link to={sublink.to} role="menuitem">{sublink.label}</Link>
                    </li>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <Button
          path="/Plan"
          title="Plan Your Trip"
        />

        <div className="schoolModal">
          <Modal show={opentoogle} className="modalAll" onHide={handleClose} aria-labelledby="mobile-menu">
            <Modal.Body className="Madl" id="mobile-menu">
              <div>
                <p className="closeModale">
                  <i className="fas fa-times"></i>
                </p>
                <ul role="menu">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.to}
                      className={`relative group subtile ${
                        active === link.label.toLowerCase()
                          ? "group-hover:flex"
                          : ""
                      }`}
                      role="none"
                    >
                      <Link
                        to={link.to}
                        className={`nav-link ${
                          activeLink === index ? "active" : ""
                        }`}
                        onClick={() => handleNavLinkClick(index)}
                        role="menuitem"
                        aria-current={activeLink === index ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                      {link.sublinks && (
                        <div className="dropdown-content" role="menu" aria-label={`${link.label} submenu`}>
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.to} className="drop" role="none">
                              <Link to={sublink.to} role="menuitem">{sublink.label}</Link>
                            </li>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="btngo">
                  <Button
                    path="/Plan"
                    click={handleClose}
                    title="Plan Your Trip"
                  />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;