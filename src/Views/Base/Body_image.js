import React from "react";
import { Outlet } from "react-router";

class BodyImage extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.image = props.image;
    this.imageClass = props.imageClass;
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-row align-items-center">
          <img src={this.image} alt="seaSide" className="MainUpperImage"></img>
          <h3 className="seaSideText">{this.text}</h3>
        </div>
        <Outlet />{" "}
      </div>
    );
  }
}

export default BodyImage;
