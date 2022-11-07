import React from "react";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travel friends about page " />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
