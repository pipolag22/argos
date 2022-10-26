import React from "react";
import imagelogo from "../../images/argos-logo-oscuro.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={imagelogo} alt="argos" width="120px"></img>
      </div>
    </div>
  );
};

export default Navbar;
