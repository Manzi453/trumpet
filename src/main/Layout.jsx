import React from "react";
import Navbar from "./navbars";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
