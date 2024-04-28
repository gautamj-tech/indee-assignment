import React from 'react';

const Content = ({ title, posters }) => {
  return (
    <div className="category-section">
      <h2 className="section-title">{title}</h2>
      <div className="posters">
        {posters.map((poster, index) => (
          <div className="poster" key={index}>
            <img className = "poster-img" src={poster.image} alt={`Poster ${index + 1}`} />
            <div className="poster-title">{poster.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
