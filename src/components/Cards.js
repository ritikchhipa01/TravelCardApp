import React, { useState } from "react";

function Cards({id, name, info, image, price, removeTour}) {
  const [readMore, setReadMore] = useState(false);
  const description = `${!readMore ? info.substring(0,200) : info}`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <div  className="card">
      <img src={image} className="image" alt="Place_image"></img>
      <p className="placeName">{name}</p>
      <div>
        <div className="tour-details">
          <h4 className="tours-price">&#8377;{price}</h4>
          <h4 className="tours-name">{name}</h4>
        </div>
        <div className="description" onClick={readMoreHandler}>
          {description}
          <span>{readMore ? "Show Less" : "....Read More"}</span>
        </div>
      </div>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}

export default Cards;
