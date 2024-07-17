import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import("./home/Hero"));
const AboutSection = lazy(() => import("./home/AboutSection"));
const Quotationsection = lazy(() => import("./home/Quotationsection"));
const Production = lazy(() => import("./home/Production"));
const ContactSection = lazy(() => import("./home/ContactSection"));
const Testimonials = lazy(() => import("./home/Testomonials"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <AboutSection />
      <Quotationsection />
      <Production />
      <ContactSection />
      <Testimonials />
    </Suspense>
  );
};

export default Home;
