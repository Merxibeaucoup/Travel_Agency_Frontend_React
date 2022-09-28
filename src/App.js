import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";

const App = () => {
  return (
    <Router>
      <ModelProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Not found should always be at the end  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModelProvider>
    </Router>
  );
};

export default App;
