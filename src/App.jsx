import React from "react";
import "./App.css";

import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Payment from "./components/Payment";
import MapSection from "./components/MapSection";
import Share from "./components/Share";

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Schedule />
      <Gallery />
      <Payment />
      <MapSection />
      <Share />
    </div>
  );
}

export default App;
