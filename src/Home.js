import React from "react";
import Navbar from "./navbar/Navbar";
import "./index.css";
import Header from "./header/Header";
import Works from "./Works";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Works />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
