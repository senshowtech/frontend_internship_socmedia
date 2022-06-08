import React from "react";
import Navbar from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
import Carousel from "../component/Carousel";
import About from "../component/About";
import Concept from "../component/Concept";
import Facility from "../component/Facility";
import Units from "../component/Units";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Carousel />
      <About />
      <Concept />
      <Facility />
      <Units />
    </div>
  );
}
