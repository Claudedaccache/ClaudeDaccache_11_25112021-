import React from "react";

class LogementAccordion extends React.Component {
  render() {
    return (
      <div className="container accordionContainer">
        <div key={this.props.KeyId} className="accordionPanels">
          {this.props.loading || !this.props.accordionBody ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div className="accordion-item itemAccordion">
              <h2 className="accordion-header">
                <button
                  type="button"
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={this.props.itemDataId}
                >
                  {this.props.AccordionTitle}
                </button>
              </h2>
              <div
                id={this.props.itemId}
                className="accordion-collapse collapse"
                data-bs-parent={this.props.itemDataId}
              >
                <div className="accordion-body">
                  <div className="bodyText">{this.props.accordionBody}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default LogementAccordion;
