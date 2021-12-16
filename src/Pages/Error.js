import React from "react";
import SiteHeader from "../Views/Base/Header";
import {NavLink} from "react-router-dom"

class Error extends React.Component {
  render() {
    return (
      <div className="container errorPage">
        <SiteHeader />
        <h2 className="errorType">404</h2>
        <h3 className="errorMessage">
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <NavLink to="/" className="errorBackwardSentence">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    );
  }
}

export default Error;
