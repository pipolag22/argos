import React from 'react';
import ArticleContainer from "./articleContainer";
import EmbedMediaArticle from "./EmbedMediaArticle";
import TextArticle from "./textArticle";
import MediaArticle from "./MediaArticle";

const Contenido = () => {
    return (
        <>
    {/* seccion donde se mostrara el contenido de articulos,videos y publicaciones de instagram  */}
            <ArticleContainer>
                <MediaArticle/>
                <EmbedMediaArticle/>
                <TextArticle/>
            </ArticleContainer>    
        </>
    )
}

export default Contenido


    