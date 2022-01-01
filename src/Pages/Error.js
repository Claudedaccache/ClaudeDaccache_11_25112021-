import React from "react";
import Header from "../Component/Header/Header";
import ErrorMessage from "../Component/Error/Error";

class Error extends React.Component {
  render() {
    return (
      <div className="container ">
        <Header />
        <ErrorMessage />
      </div>
    );
  }
}

export default Error;
