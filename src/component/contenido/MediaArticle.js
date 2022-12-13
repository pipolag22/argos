import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/justiciaEdit.png";
import "./article.css";

// vistazo rápido del articulo presentado en la ruta artic1
const MediaArticle = () => {
  return (
    <div className="nota w-400 p-3 mt-6 mb-6">
      <div className="ratio ratio-21x9">
        <img src={img} alt="nota"></img>
      </div>
      <div className="body" id="media">
        <div className="titulo">
          <h3>
            <Link className="nav-link mt-2" to="/artic1">
              Antígona: Parte 1
            </Link>
          </h3>
        </div>
        <div className="subtitulo">
          <h4>Un hermano se reveló contra su ciudad...</h4>
        </div>
        <div className="description"></div>
        <div className="labels">Artículo | 26/10/2022</div>
      </div>
    </div>
  );
};

export default MediaArticle;
