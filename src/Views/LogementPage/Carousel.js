import React from "react";
import $ from "jquery";

class Carousel extends React.Component {
  // getPicIndex = () => {
  // let carousel = document.querySelector(".carouselContainer");
  // carousel.addEventListener("slid.bs.carousel", function () {
  //   let total = document.querySelectorAll(".carousel-item").length;
  //   let currentIndex = document.querySelector(".carousel-item .active").index() + 1;
  //   var text = currentIndex + "/" + total;
  //   return text
  // })}

  getPicIndex = () => {
    let totalItems = $(`${this.props.logement.id} .item`).length;
    $(`${this.props.logement.id}`).on("slide.bs.carousel", function () {
      setTimeout(function () {
        let currentIndex =
          $(`${this.props.logement.id} div.active`).index() + 1;
        return "" + currentIndex + "/" + totalItems + "";
      }, 1000);
    });

    // $("#carouselExampleIndicators").on("slid.bs.carousel", function () {
    //   let total = $(".carousel-item").length;
    //   let currentIndex = $("div.active").index() + 1;
    //   currentIndex = $(".carousel-item .active").index() + 1;
    //   let text = currentIndex + "/" + total;
    //   return text;
    // });
  };

  render() {
    return (
      <div className="container carouselContainer">
        {this.props.logement.map((lgmt) =>
          this.props.loading || !this.props.logement ? (
            <div className="loadingMessage">loading...</div>
          ) : (
            <div
              id={lgmt.id}
              className="carousel slide"
              data-bs-ride="carousel"
              key={lgmt.id}
            >
              {/* <div className="carousel-indicators">
                {" "}
                <h3 className=".slideText">{lgmt.pictures.length}</h3>
              </div> */}

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={lgmt.cover}
                    className="d-block w-100 carouselImage"
                    alt="..."
                  ></img>
                </div>
                {/* {this.props.pics} */}
                {lgmt.pictures.map((pic) => {
                  if (pic !== lgmt.cover) {
                    return (
                      <div key={pic} className="carousel-item">
                        <img
                          src={pic}
                          className="d-block w-100 carouselImage"
                          alt={lgmt.title}
                        ></img>
                      </div>
                    );
                  }
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${lgmt.id}`}
                data-bs-slide="prev"
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
                data-bs-target={`#${lgmt.id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )
        )}
      </div>
    );
  }
}
export default Carousel;
