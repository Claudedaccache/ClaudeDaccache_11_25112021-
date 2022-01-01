import React from "react";
import mountain from "../Assets/mountains.png";
import Accordion from "..//Component/Accordion/Accordion";
import CoverImage from "../Component/CoverImage/CoverImage"
import Layout from "../Containers/Layout/Layout"

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container">
        <Layout>
        <CoverImage text="" image={mountain} />
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
     </Layout>
      </div>
    );
  }
}

export default AboutUs;


