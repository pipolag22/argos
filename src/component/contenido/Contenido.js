import React from "react";
import ArticleContainer from "./articleContainer";
import EmbedMediaArticle from "./EmbedMediaArticle";
import TextArticle from "./textArticle";
import MediaArticle from "./MediaArticle";

const Contenido = () => {
  return (
    <>
      {/* seccion donde se mostrara el contenido de articulos,videos y publicaciones de instagram  */}
      <ArticleContainer>
        <MediaArticle />
        <EmbedMediaArticle />
        <TextArticle
          url={"https://www.instagram.com/p/Ci8qkxYLUsr/"}
          texto={`Lo interesante de la lectura es que nos llama constantemente al gesto
          del hombre primitivo: el asombro... Leer supone des-centrarnos, correr
          la mirada para mirar a otro, leer otras historias, conocer otros
          mundos. No hay magia más patente que la del asombro. No hace falta
          incluso explicarlo`}
        />
        <TextArticle
          url={"https://www.instagram.com/p/ChawguhPHEl/"}
          texto={`Bienvenidos a otra sección de Argos. Hoy pensamos con Antígona en la justicia.

          Antígona es una de las tragedias más conocidas del dramaturgo Sófocles, siglo V a. C. Si, el siglo más increíble después de Messi en el XXI, todo filósofo, poeta y dramaturgo parecen asentarse en ese siglo
          
          Ante la prohibición de Creonte, Antígona se revela. Decide agradar a los dioses, que sabe que son eternos, y que pasará "más tiempo" con ellos en el Hades.`}
        />
        <TextArticle
          url={"https://www.instagram.com/p/CgxhzELPhe-/"}
          texto={`Les traemos la historia de "Prometeo encadenado" con la ayuda de La Rosalía 👩🏼‍🎤 (mucho texto)

          Así se titula la tragedia de Esquilo, uno de los primeros dramaturgos de quienes tenemos registro en Grecia, Atenas siglo V 🎭
          
          Prometeo es un titán que decide robar la fuente del fuego y entregárselo a los mortales: los seres humanos ✋🏽`}
        />
      </ArticleContainer>
    </>
  );
};

export default Contenido;
