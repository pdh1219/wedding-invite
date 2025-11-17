import React from "react";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Couple />
      <Schedule />
      <Location />
      <Gallery />
    </div>
  );
}

export default App;
