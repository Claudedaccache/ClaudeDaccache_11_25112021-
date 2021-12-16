import React from "react";



class LogementDetails extends React.Component {

    render() {

        return (
      <div className="container logementUpperContainer">
        {this.props.loading || !this.props.filteredLogement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
              
        <div key={this.props.filteredLogement.title} className="d-flex flex-column justify-content-start">
          <h1 className="logementTitle">{this.props.filteredLogement.title}</h1>
          <h3 className="logementLocation">{this.props.filteredLogement.location}</h3>
        </div>
          )}
      </div>
    );
  }
}
export default LogementDetails;
