import React from "react";
import styles from "../LogementContact/LogementContact.module.css"

class LogementContact extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.loading || !this.props.Logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <div>
            <div className="d-flex flex-row justify-content-end align-items-center">
              <div key={this.props.Logement.id} className={styles.contactIdentity}>
                <h3 className={styles.contactName}>{this.props.Logement.host.name}</h3>
              </div>
              <img
                className={styles.contactPhoto}
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
