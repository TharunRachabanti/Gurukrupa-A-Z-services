import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Services from "./components/services";




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space"></div>
      <Services />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
