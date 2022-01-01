import React from "react";
import { Link } from "react-router-dom";
import styles from "../Cards/Cards.module.css";

class Cards extends React.Component {
  render() {
    return (
      <div className={`container ${styles.cardsContainer}`}>
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div key={lgmt.title} className="row row-cols-1 row-cols-md-4">
              <div className={`card ${styles.card} col col-lg-4 col-md-6`}>
                <Link
                  to={`/Logement/${lgmt.id}`}
                  className={`card-body ${styles.cardBody}`}
                  // style={{
                  //   backgroundImage: `url(${lgmt.cover})`,
                  // }}
                >
                  <img src={lgmt.cover}  style={{
                    width: "100%", height:"100%", borderRadius: "10px"
                  }} alt="" />
                  <h5 className={styles.cardTitle}>{lgmt.title}</h5>
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
