import React from "react";
import "./article.css";
import { InstagramEmbed } from "react-social-media-embed";

const textArticle = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/Ci8qkxYLUsr/"
        width={328}
        captioned
      />
    </div>
  );
};

export default textArticle;
