import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Bio from "./components/bio";




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space"></div>
      <Services />
      <AboutUs />
      <Bio/>
    </React.Fragment>
  );
}

export default App;
