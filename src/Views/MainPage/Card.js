import React from "react";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <div className="container cardsContainer">
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div key={lgmt.title} className="row row-cols-1 row-cols-md-4">
              <div className="card col col-lg-4 col-md-6">
                <Link to={`/Logement/${lgmt.id}`} className="card-body">
                  <h5 className="card-title">{lgmt.title}</h5>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}
export default Cards;
