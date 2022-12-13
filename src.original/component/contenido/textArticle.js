import React from "react";
import "./article.css";
import { InstagramEmbed } from "react-social-media-embed";
import Instagram from "svelte-instagram";

// conexion a las publicaciones de instagram
const textArticle = () => {
  return (
    <div id="media" style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/Ci8qkxYLUsr/"
          width={328}
          captioned={false}
        />
      </div>
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/Ci8qkxYLUsr/"
          width={328}
          captioned={false}
        />
      </div>
    </div>
  );
};

export default textArticle;
