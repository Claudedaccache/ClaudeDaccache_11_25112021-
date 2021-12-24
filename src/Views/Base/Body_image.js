import React from "react";

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
          <img src={this.image} alt={this,this.image} className="MainUpperImage"></img>
          <h3 className="seaSideText">{this.text}</h3>
        </div>
      </div>
    );
  }
}

export default BodyImage;
