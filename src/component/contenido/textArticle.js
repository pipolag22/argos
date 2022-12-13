import React from "react";
import "./article.css";
import { InstagramEmbed } from "react-social-media-embed";
import "./nosotros.css";

// conexion a las publicaciones de instagram
const textArticle = ({ url, texto }) => {
  return (
    <div
      className="textArticle"
      id="media"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <InstagramEmbed url={url} width={328} captioned={false} />
      </div>
      <div id="mediatext">
        <h4>{texto}</h4>
      </div>
    </div>
  );
};

export default textArticle;
