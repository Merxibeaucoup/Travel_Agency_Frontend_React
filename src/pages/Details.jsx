import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import DestinationInfo from "../components/DestinationInfo";
const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  console.log(destinationsData.details);
  const { details } = destinationsData;
  const { id } = useParams();
  /*
 - RUn UE only one time, when the component has been loaded
 - then watch for id , if changed run UE again
  */
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo />
    </>
  );
};

export default Details;
