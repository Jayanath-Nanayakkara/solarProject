import React, { lazy, Suspense } from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Quotation = lazy(() => import("./components/Quotation"));
const Gallary = lazy(() => import("./components/Gallary"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/quotation" element={<Quotation />} />

          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
