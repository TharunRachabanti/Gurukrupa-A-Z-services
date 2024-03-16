import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space"></div>
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
