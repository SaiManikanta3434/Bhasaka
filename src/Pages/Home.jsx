import React from "react";
import Hero from "../Components/Hero";
import Middle from "../Components/Middle";
import ServicesSection from "../Components/Services";
import Section from "../Components/Section";
import Technology from "../Components/Technology";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";
import StickyShowcase from "../Components/Sticky";

const Home = () => {
  return (
    <div>
      <Hero />
      <Middle />
      <ServicesSection />

      {/* Sticky scrollytelling section */}
      <StickyShowcase />

      <Section />
      <Technology />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
