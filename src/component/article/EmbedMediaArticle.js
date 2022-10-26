import React from "react";

const EmbedMediaArticle = () => {
  return (
    <div className="nota w-50 p-3 mt-6 mb-6">
      <div className="media">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pM81gEFoEmc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="body">
        <div className="titulo">
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pulvinar massa vel velit suscipit, quis bibendum ligula mattis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies risus non risus aliquam rhoncus. Suspendisse at semper
            ante, a imperdiet ante. Aenean dignissim luctus ex quis aliquet.
            Mauris vulputate, ex et pellentesque mollis, mi felis hendrerit leo,
            et convallis leo odio id felis. Phasellus id ipsum in sem dapibus
            egestas. Suspendisse dignissim porttitor maximus.
          </p>
        </div>
        <div className="labels">Lorem | 26/10/2022</div>
      </div>
    </div>
  );
};

export default EmbedMediaArticle;
