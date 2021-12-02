import React from "react";

class LogementTag extends React.Component {
  render() {
    return (
      <div className="container">
          <ul className="d-flex flex-row justify-content-start"> {this.props.logementTag}</ul>
      </div>
    );
  }
}
export default LogementTag;
