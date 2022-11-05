import React from "react";

import { useState } from "react";
import { Helmet } from "react-helmet-async";

import PageContainer from "../components/PageContainer";

const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem.",
  });
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travel friends about page " />
      </Helmet>
      <PageContainer data={state} />
    </>
  );
};

export default About;
