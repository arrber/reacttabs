import React from "react";
import './DomainCard.scss';

const DomainCard = props => {
  return (
    <div className="card-holder">
      <div className="main">
        <h2 className="domain-type">{props.type}</h2>
      </div>
      <div className="info">
        <h4 className="domain-price">{props.price}</h4>
        <p className="price-info">{props.priceInfo}</p>
      </div>
      <div className="button">
        <button className="btn">Buy Now</button>
      </div>
    </div>
  );
};

export default DomainCard;
