import React from "react";
import styles from "../Carousel/Carousel.module.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.total = this.props.Logement.pictures.length;
    this.state = {
      currentIndex: 0,
    };
  }

  getPicIndex = (direction) => {
    let currentIndex = this.state.currentIndex;
    if (direction === "next") {
      if (this.state.currentIndex === this.total - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      this.setState({ currentIndex });
    }

    if (direction === "prev") {
      let currentIndex = this.state.currentIndex;
      if (this.state.currentIndex === 0) {
        currentIndex = this.total - 1;
      } else {
        currentIndex = currentIndex - 1;
      }
      this.setState({ currentIndex });
    }
  };

  render() {
    return (
      <div className={styles.carouselContainer}>
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
          data-bs-ride="carousel"
          key={this.props.Logement.id}
        >
          {this.props.loading || !this.props.Logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div>
              <div>
                {" "}
                <h3 className={styles.slideText}>
                  {this.state.currentIndex + 1} / {this.total}
                </h3>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={this.props.Logement.cover}
                    className={styles.carouselImage}
                    alt="..."
                  ></img>
                </div>
                {this.props.Logement.pictures.map((pic) => {
                  if (pic !== this.props.Logement.cover) {
                    return (
                      <div key={pic} className="carousel-item">
                        <img
                          src={pic}
                          className={styles.carouselImage}
                          alt={this.props.Logement.title}
                        ></img>
                      </div>
                    );
                  }
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                onClick={() => this.getPicIndex("prev")}
              >
                <span
                  className={`${styles.prevbtn} carousel-control-prev-icon`}
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                onClick={() => this.getPicIndex("next")}
              >
                <span
                  className={`${styles.nextBtn} carousel-control-next-icon`}
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Carousel;
