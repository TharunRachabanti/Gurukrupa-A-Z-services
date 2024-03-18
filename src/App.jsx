import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Bio from "./components/bio";
import Difference from "./components/difference";




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space"></div>
      <Services />
      <AboutUs />
      <Bio/>
      <Difference/>
    </React.Fragment>
  );
}

export default App;
