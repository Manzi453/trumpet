import React from "react";
import { Link } from "react-router-dom";

const Button = ({ id, path, click, title, icon, styles, titlebtn }) => {
  return (
    <Link to={path} onClick={click} className="btnplan">
      {title} {icon}
      {titlebtn}
    </Link>
  );
};

export default Button;
