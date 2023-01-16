import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Experience from "./Experience/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience/>
    </>
  );
}
