import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-row flex-wrap justify-content-between cardsContainer">
              <div className="row row-cols-1 row-cols-md-4">
      <div className="card col col-lg-4 col-md-6">
        <div className="card-body">
          <h5 className="card-title">{this.props.text}</h5>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Cards;


