import React from "react";
import Home from "./Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
