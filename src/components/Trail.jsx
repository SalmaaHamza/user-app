import React from 'react';

const Trail = () => {

    return (
      <div className="row">
        <iframe
          height={600}
          src="https://www.youtube.com/embed/pt81CJcWZy8?autoplay=0&showinfo=0&controls=0&showinfo=0"
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="w-100"
        ></iframe>
      </div>
    );
};

export default Trail;