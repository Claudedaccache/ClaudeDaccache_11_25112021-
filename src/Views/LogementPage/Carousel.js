import React from "react";
import $ from "jquery";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerIndicator: `1/${$(".carousel-item").length}`,
    };
  }

  getPicIndex = () => {
    let slideText = document.getElementsByClassName("slideText");
    let myCarousel = document.getElementById("myCarousel");
    myCarousel.addEventListener("slid.bs.carousel", () => {
      let total = $(".carousel-item").length;
      let currentIndex = $("#myCarousel").find(".active").index() + 1;
      let text = `${currentIndex}/${total}`;
      console.log(text);
      return (slideText.innerHTML = this.setState({ innerIndicator: text }));
    });
  };

  render() {
    return (
      <div className="container carouselContainer">
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          key={this.props.filteredLogement.id}
        >
          {this.props.loading || !this.props.filteredLogement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div>
              <div>
                {" "}
                <h3 className="slideText">{this.state.innerIndicator}</h3>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={this.props.filteredLogement.cover}
                    className="d-block w-100 carouselImage"
                    alt="..."
                  ></img>
                </div>
                {this.props.filteredLogement.pictures.map((pic) => {
                  if (pic !== this.props.filteredLogement.cover) {
                    return (
                      <div key={pic} className="carousel-item">
                        <img
                          src={pic}
                          className="d-block w-100 carouselImage"
                          alt={this.props.filteredLogement.title}
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
                onClick={() => this.getPicIndex()}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                onClick={() => this.getPicIndex()}
              >
                <span
                  className="carousel-control-next-icon"
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
