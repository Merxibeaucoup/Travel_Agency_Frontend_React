import React from "react";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

const Contact = () => {
  const [state] = useState({
    heading: "contact us",
    pageHeading: "leave your message in the contact form",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores optio. Amet, vitae. Est minima modi cumque pariatur voluptate ipsa, labore iste aliquam officiis tenetur nobis sunt quos sed rem.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="travel friends contact page " />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
