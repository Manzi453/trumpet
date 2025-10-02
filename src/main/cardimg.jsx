import React from "react";

const Card = ({ title, imageUrl, description, click }) => {
  return (
    <div className="card" onClick={click}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <button className="card-description">Details</button>
      </div>
    </div>
  );
};

export default Card;
