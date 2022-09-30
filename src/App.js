import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
const App = () => {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <DestinationsProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Not found should always be at the end  */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </DestinationsProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
};

export default App;
