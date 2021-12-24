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
        {this.props.loading || !this.props.Logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <div className="d-flex flex-row logementRatingStars" key={this.props.Logement.id}>
            {this.props.Logement.rating
              ? this.getRating(this.props.Logement.rating)
              : "No Rating Yet!!"}
          </div>
        )}
      </div>
    );
  }
}
export default LogementRating;
