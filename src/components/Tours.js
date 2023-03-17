import React from "react";
import Cards from "./Cards";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div className="container">
        <h2 className="title">Plan With Love</h2>
      </div>

      <div className="cards">
        {
          tours.map((tour) => {
          return <Cards {...tour}  removeTour={removeTour}/>;
        })
        };
      </div>
    </div>
  );
}

export default Tours;
