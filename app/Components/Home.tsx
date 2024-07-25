"use client";

import React from "react";
import Hero from "./Hero/Hero";
import Teach from "./Teach/Teach";
import Contact from "./Contact/Contact";
import Pages from "./Pages/Pages";
import About from "./About/About";
import ResponsiveNav from "@/app/Components/Navigation/ResponsiveNav";
import DoctorCart from "./Doctors/DoctorCart";

const Home = () => {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <DoctorCart />
      <Teach />
      <Pages />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
