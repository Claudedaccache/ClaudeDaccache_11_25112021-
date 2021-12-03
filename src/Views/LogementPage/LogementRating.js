import React from "react";

class LogementRating extends React.Component {
  getRating = (rating) => {
    let output = [];

    for (var i = rating; i >= 1; i--)
      output.push(
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill="#FF6060"
          />
        </svg>
      );

    for (let i = 5 - rating; i >= 1; i--)
      output.push(
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill="rgb(197, 197, 197)"
          />
        </svg>
      );
    return output;
  };

  render() {
    return (
      <div className="container">
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div className="d-flex flex-column mt-4">
              <div className="d-flex flex-row justify-content-end align-items-center">
                <div className="d-flex flex-column">
                  <h3 className="contactName">{lgmt.host.name}</h3>
                </div>
                <img
                  className="contactPhoto"
                  src={lgmt.host.picture}
                  alt={lgmt.host.name}
                ></img>
              </div>
              <div className="d-flex flex-row logementRatingStars">
                {this.getRating(lgmt.rating)}
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}
export default LogementRating;


