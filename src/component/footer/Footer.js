import React from "react";
import "./footer.css";
import icon1 from "../../images/icons/instagram.png";
import icon2 from "../../images/icons/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="redes">
        <div>
          <a
            href="https://www.instagram.com/argos.pd/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon1} width="40px" alt="instagram"></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCsKTQNWkLDCYQPi8SQ0oUZg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon2} width="40px" alt="youtube"></img>
          </a>
        </div>
      </div>
      <div className="info">
        <p>argos.plataformadigital@gmail.com - Tel +54 341 362 6491</p>

        <p>COPYRIGHT © 2022 ARGOS</p>
      </div>
    </div>
  );
};

export default Footer;
