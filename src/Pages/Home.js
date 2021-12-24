import React from "react";
import SiteHeader from "../Views/Base/Header";
import Cards from "../Views/MainPage/Card";
import seaSide from "../Assets/seaSidePic.png";
import BodyImage from "../Views/Base/Body_image";
import Footer from "../Views/Base/Footer";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <SiteHeader />
         <BodyImage text="Chez vous, partout et ailleurs" image={seaSide} />
        <Cards logement={this.props.logement} />
        <Footer />
      </div>
    );
  }
}

export default Home;
