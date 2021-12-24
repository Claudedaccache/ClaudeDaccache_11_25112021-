import React from "react";

class LogementContact extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.loading || !this.props.Logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <div className="contactDetails">
            <div className="d-flex flex-row justify-content-end align-items-center">
              <div key={this.props.Logement.id} className="d-flex flex-column">
                <h3 className="contactName">{this.props.Logement.host.name}</h3>
              </div>
              <img
                className="contactPhoto"
                src={this.props.Logement.host.picture}
                alt={this.props.Logement.host.name}
              ></img>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default LogementContact;
