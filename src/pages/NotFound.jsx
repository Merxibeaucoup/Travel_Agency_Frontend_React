import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found Page</title>
        <meta name="description" content="travel friends not found page " />
      </Helmet>
      <h1>Page not found</h1>
    </>
  );
};

export default NotFound;
