import React from "react";
import styles from "../LogementDetails/LogementDetails.module.css"



class LogementDetails extends React.Component {

    render() {

        return (
      <div>
        {this.props.loading || !this.props.Logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
              
        <div key={this.props.Logement.title} className="d-flex flex-column justify-content-start">
          <h1 className={styles.logementTitle}>{this.props.Logement.title}</h1>
          <h3 className={styles.logementLocation}>{this.props.Logement.location}</h3>
        </div>
          )}
      </div>
    );
  }
}
export default LogementDetails;
