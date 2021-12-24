import React from "react";

class LogementTag extends React.Component {
  render() {
    return (
      <div className="container logementTagsContainer">
          {this.props.loading || !this.props.Logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <ul key={this.props.Logement.id} className="d-flex flex-row flex-wrap">
              {this.props.Logement.tags.map((tag) => {
                return (
                  <li key={tag} className="logementTag">
                    {tag ? tag : ""}
                  </li>
                );
              })}
            </ul>
          )}
      </div>
    );
  }
}
export default LogementTag;
