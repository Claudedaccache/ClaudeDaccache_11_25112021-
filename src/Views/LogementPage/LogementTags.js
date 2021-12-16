import React from "react";

class LogementTag extends React.Component {
  render() {
    return (
      <div className="container logementTagsContainer">
          {this.props.loading || !this.props.filteredLogement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <ul key={this.props.filteredLogement.id} className="d-flex flex-row">
              {this.props.filteredLogement.tags.map((tag) => {
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
