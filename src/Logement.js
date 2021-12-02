import "./App.css";
import React from "react";
import SiteHeader from "./Views/Base/Header";
import BodyImage from "./Views/Base/Body_image";
import Carousel from "./Views/LogementPage/Carousel";

// import Apartments from "./Views/Apartment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Logement extends React.Component {
  state = {
    loading: true,
    apartment: null,
  };

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/f34t");
    const data = await response.json();
    this.setState({data});
  }

  render() {
    return (
      <div className="Logement">
        <div className="container d-flex flex-column">
          <SiteHeader />
          
        </div>
      </div>
    );
  }
}

export default Logement;
