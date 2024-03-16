

import React from "react";
import "../styles/services.css";
import Card from "../components/card";

const OurServices = () => {
  const additionalInfo = {
    Insurace: [
      "Providing new policies.",
      "Service towards old policies.",
      "Claims and loan services.",
      "Nominee and other changes in policies.",
      "Other Life Insurances: Tata, ICICI, BAJAJ.",
      "Vehicles and General Insurances.",
    ],

    Job: [
      "Technical Jobs.",
      "Non-Technical Jobs.",
      "Skilled Jobs.",
      "Semi-Skilled Jobs.",
      "Unskilled Jobs.",
      "Part-time Jobs.",
      "Jobs for retaired persons.",
      "Jobs for women.",
       
    ],
    RealEstate: [
      "New open plots.",
      "Appartment plots.",
      "Individual houses.",
      "Old houses.",
      "Re-sale properties.",
      "Rented houses.",
      "Sites for lease.",
    ],

    Shopping: [
      "Furniture products.",
      "Clothes.",
      "Grocerories.",
      "Presentation Articles.",
      "Cosmetic Products.",
      "Herbal Products.",
    ],

    FoodSupply: [
      "Cattering Services.",
      "Meals Supply.",
      "Providing cheffs.",
      "Event Management in Food Supply,",
    ],
    Spirutual: [
      "Providing information about social serice organization.",
      "Guidness for social services.",
      "Providing blood donors infomation.",
      "Providing contacts.",
    ],
  };

  return (
    <div>
    <div className="services">
      <Card
        imgSrc="assets/img1.png"
        imgAlt="Card Image 1"
        title="Insurace Consultancy"
        description={additionalInfo["Insurace"]}
        buttonText="Get Brochure"
        link="something"
      />

      <Card
        imgSrc="assets/img3.png"
        imgAlt="Card Image 2"
        title="Job Consultancy"
        description={additionalInfo["Job"]}
        buttonText="Get Brochure"
        link="something"
      />

      <Card
        imgSrc="assets/img2.png"
        imgAlt="Card Image 1"
        title="Insurace Consultancy"
        description={additionalInfo["Insurace"]}
        buttonText="Get Brochure"
        link="something"
      />
    </div>
    <div className="services">
    <Card
      imgSrc="assets/img1.png"
      imgAlt="Card Image 1"
      title="Insurace Consultancy"
      description={additionalInfo["Insurace"]}
      buttonText="Get Brochure"
      link="something"
    />

    <Card
      imgSrc="assets/img3.png"
      imgAlt="Card Image 2"
      title="Job Consultancy"
      description={additionalInfo["Job"]}
      buttonText="Get Brochure"
      link="something"
    />

    <Card
      imgSrc="assets/img2.png"
      imgAlt="Card Image 1"
      title="Insurace Consultancy"
      description={additionalInfo["Insurace"]}
      buttonText="Get Brochure"
      link="something"
    />
  </div>
  </div>
  );
};

export default OurServices;