import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Programs from "../pages/Program";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
