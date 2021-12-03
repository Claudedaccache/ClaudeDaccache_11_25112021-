import React from "react";

class LogementAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.descText = props.descText;
    this.equipText = props.equipText;
    this.descBody = props.descBody;
    this.equipBody = props.equipBody;
  }

  render() {
    return (
      <div className="container">
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div
              className="accordion d-flex flex-row justify-content-between"
              id="accordionPanels"
            >
              <div className="accordion-item description">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    {this.props.descText}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#collapseOne"
                >
                  <div className="accordion-body">
                    <div className="bodyText">{lgmt.description}</div>
                  </div>
                </div>
              </div>

              <div className="accordion-item equipment">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {this.props.equipText}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#collapseTwo"
                >
                  <div className="accordion-body  ">
                    <div className="bodyText">
                      <ul>
                        {" "}
                        {lgmt.equipments.map((equip) => (
                          <li key={equip}>{equip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}
export default LogementAccordion;
