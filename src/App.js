import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelContext from "./context/ModelContext";

const App = () => {
  const [state, dispatch] = useState({ modelStatus: false });
  const openModel = () => {
    dispatch({ modelStatus: true });
  };
  const closeModel = () => {
    dispatch({ modelStatus: false });
  };
  return (
    <Router>
      <ModelContext.Provider value={{ state, dispatch, openModel, closeModel }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Not found should always be at the end  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModelContext.Provider>
    </Router>
  );
};

export default App;
