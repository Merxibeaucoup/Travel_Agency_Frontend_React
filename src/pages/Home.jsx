import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";

const Home = () => {
  const { state: ss, dispatch, openModel } = useContext(ModelContext);
  console.log("Home Page:", ss);
  const [state] = useState({
    heading: "we are travel friends",
    paragraph:
      "Come and join us travel the most famous and beautiful places in the world",
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default" onClick={openModel}>
          Get Started
        </button>
      </Header>
      <Model />
    </>
  );
};

export default Home;
