import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Bio from "./components/bio";
import Difference from "./components/difference";
import "@fortawesome/fontawesome-free/css/all.css";
import YoutubeDisplayComponent from "./components/youtubeDisplayComponent";
import ContactMe from "./components/contactMe";
import Black from "./components/black";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Services />
      <AboutUs />
      <Difference />
      <Bio />
      <YoutubeDisplayComponent />
      <ContactMe />
      {/* <Black/> */}
    </React.Fragment>
  );
}

export default App;
