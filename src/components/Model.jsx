import React from "react";
import { useContext } from "react";
import ModelContext from "../context/ModelContext";

const Model = () => {
  const { state, dispatch, closeModel } = useContext(ModelContext);
  const close = (e) => {
    // if clickd outside the box , fire closeModel function
    if (e.target.getAttribute("class") === "model") {
      closeModel();
    }
  };
  // if modelStatus is true .. return UI
  return state.modelStatus ? (
    <div className="model" onClick={close}>
      <div className="model__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
        voluptates pariatur repellat sint itaque neque temporibus totam earum
        odio facilis quae ratione magnam, similique, iste nemo saepe, suscipit
        quam corporis? Nulla similique est quae iste illo ipsum dolores
        explicabo cupiditate.
      </div>
    </div>
  ) : (
    ""
  );
};

export default Model;
