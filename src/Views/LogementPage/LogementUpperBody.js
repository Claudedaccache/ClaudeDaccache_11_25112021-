import React from "react";

class LogementUpperBody extends React.Component {
  render() {
    return (
      <div className="container logementUpperContainer">
        {this.props.logement.map((lgmt) =>
        this.props.loading || !this.props.logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
              
        <div key={lgmt.title} className="d-flex flex-column justify-content-start">
          <h1 className="logementTitle">{lgmt.title}</h1>
          <h3 className="logementLocation">{lgmt.location}</h3>
        </div>
          )
          )}
      </div>
    );
  }
}
export default LogementUpperBody;
