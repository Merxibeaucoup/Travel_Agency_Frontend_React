import React from "react";
import { useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [state] = useState({
    heading: "we are travel friends",
    paragraph:
      "Come and join us travel the most famous and beautiful places in the world",
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default">Get Started</button>
      </Header>
    </>
  );
};

export default Home;
