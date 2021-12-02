import React from "react";

class LogementUpperBody extends React.Component {
  render() {
    return (
      <div className="container logementUpperContainer">
        <div className="d-flex flex-column justify-content-start">
          <h1 className="logementTitle">{this.props.logementTitle}</h1>
          <h3 className="logementLocation">{this.props.logementLocation}</h3>
        </div>
      </div>
    );
  }
}
export default LogementUpperBody;
