import React from "react";
import styles from "../../Component/CoverImage/CoverImage.module.css"

class CoverImage extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.image = props.image;
    this.imageClass = props.imageClass;
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row align-items-center">
          <img src={this.image} alt={this.image} className={styles.mainUpperImage}></img>
          <h3 className={styles.seaSideText}>{this.text}</h3>
        </div>
      </div>
    );
  }
}

export default CoverImage;
