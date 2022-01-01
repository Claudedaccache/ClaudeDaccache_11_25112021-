import React from "react";
import styles from "../Accordion/Accordion.module.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.itemclass = props.itemclass;
    this.itemId = props.itemId;
    this.itemTarget = props.itemTarget;
  }

  render() {
    return (
      <div className={styles.accordionAboutUs}>
        <div className={`accordion-item ${styles.aboutUsItem}`}>
          <h2 className="accordion-header" id={this.itemId}>
            <button
              className={`accordion-button collapsed ${styles.aboutUsAccordionBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={this.itemTarget}
              aria-expanded="false"
              aria-controls={this.itemclass}
            >
              {this.text}
            </button>
          </h2>
          <div
            id={this.itemclass}
            className="accordion-collapse collapse "
            aria-labelledby={this.itemId}
            data-bs-parent={this.itemTarget}
          >
            <div className={`accordion-body ${styles.accordionBody}`} >
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Accordion;
