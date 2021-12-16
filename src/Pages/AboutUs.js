import React from "react";
import SiteHeader from "../Views/Base/Header";
import mountain from "../Assets/mountains.png";
import Accordion from "../Views/AboutUsPage/Accordion";
import BodyImage from "../Views/Base/Body_image";
import Footer from "../Views/Base/Footer";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container">
        <SiteHeader />
        <BodyImage text="" image={mountain} />
        <Accordion
      text="Fiabilité"
      itemclass="collapseOne"
      itemTarget="#collapseOne"
      itemId="headingOne"
    />    
     <Accordion
      text="Respect"
      itemclass="collapseTwo"
      itemTarget="#collapseTwo"
      itemId="headingTwo"
    />
       <Accordion
      text="Service"
      itemclass="collapseThree"
      itemTarget="#collapseThree"
      itemId="headingThree"
    />
        <Accordion
      text="Responsabilité"
      itemclass="collapseFour"
      itemTarget="#collapseFour"
      itemId="headingFour"
    />
     <Footer />
      </div>
    );
  }
}

export default AboutUs;


