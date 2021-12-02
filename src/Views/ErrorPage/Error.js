import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div className="container errorPage">
          <h2 className="errorType">404</h2>
          <h3 className="errorMessage">
            Oups! La page que vous demandez n'existe pas.
          </h3>
          <h3 className="errorBackwardSentence">Retourner sur la page d’accueil</h3>
      </div>
    );
  }
}

export default Error;
