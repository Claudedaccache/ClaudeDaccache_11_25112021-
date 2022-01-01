import React from "react";
import styles from "../LogementTag/LogementTag.module.css"

class LogementTag extends React.Component {
  render() {
    return (
      <div className={styles.logementTagsContainer}>
          {this.props.loading || !this.props.Logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <ul key={this.props.Logement.id} className="d-flex flex-row flex-wrap">
              {this.props.Logement.tags.map((tag) => {
                return (
                  <li key={tag} className={styles.logementTag}>
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
