// Navbar.js
import React from "react";
import "../styles/navbar.css";
import Services from "../components/services";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="appbar">
        <div className="logo">
          <img src="assets/logo1.png" alt="" />
        </div>
        <div className="titles">
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="title">
        <h1>A-Z SERVICES</h1>
      </div>
      <div className="para">
        <p>

        <strong className="highlighted-text">Gurukrupa AtoZ Services</strong> is your one-stop destination for a diverse array of essential services. Whether you're seeking expert guidance on insurance, job placement, real estate transactions, or digital shopping, our team of professionals is here to assist you. We also extend our support to cover your basic needs, from food supply consultancy to a wide range of social, cultural, and spiritual services, making A-Z Services the ultimate solution for all your needs.





          {/* Welcome to <strong className="highlighted-text">Gurukrupa AtoZ Services</strong>, your
          ultimate destination for a wide range of essential services. Our
          dedicated team of professionals is here to guide you through insurance,
          job placement, real estate transactions, and digital shopping, ensuring
          you have expert support every step of the way. Beyond the basics, we
          also offer assistance with food supply consultancy and provide a
          plethora of social, cultural, and spiritual services to cater to all
          your needs. A-Z Services is your comprehensive solution for all your
          essential requirements. */}
        </p>
      </div>
      <div className="connect-button">
        <button>CONNECT</button>
      </div>
      {/* <Services /> */}
    </div>
  );
};

export default Navbar;
