import React from "react";

class LogementTag extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <ul className="d-flex flex-row justify-content-start">
              {/* {this.props.logementTag} */}
              {lgmt.tags.map((tag) => {
                return (
                  <li key={tag} className="logementTag">
                    {tag}
                  </li>
                );
              })}
            </ul>
          )
        )}
      </div>
    );
  }
}
export default LogementTag;
