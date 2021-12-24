import React from "react";



class LogementDetails extends React.Component {

    render() {

        return (
      <div className="container logementUpperContainer">
        {this.props.loading || !this.props.Logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
              
        <div key={this.props.Logement.title} className="d-flex flex-column justify-content-start">
          <h1 className="logementTitle">{this.props.Logement.title}</h1>
          <h3 className="logementLocation">{this.props.Logement.location}</h3>
        </div>
          )}
      </div>
    );
  }
}
export default LogementDetails;
