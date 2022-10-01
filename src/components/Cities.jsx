import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cities = ({ cities, name }) => {
  return (
    <div className="cities">
      <div className="container">
        <div className="cities__container">
          <h2 className="heading">cities in {name}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {cities.length > 0
              ? cities.map((city) => (
                  <div className="col-3 p-15" key={city.id}>
                    <div className="cities__body">
                      <div className="cities__body__image">
                        <LazyLoadImage src={city.image} alt={city.image} />
                      </div>
                    </div>
                  </div>
                ))
              : `No cities in ${name}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
