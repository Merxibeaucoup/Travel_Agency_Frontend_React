import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS, CITIES } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/cities/Cities";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);

  const { details, filteredCities } = destinationsData;
  const { id } = useParams();
  /*
 - RUn UE only one time, when the component has been loaded
 - then watch for id , if changed run UE again
  */
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
      <Cities cities={filteredCities} name={details.name} />
    </>
  );
};

export default Details;
