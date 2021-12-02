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
    $("#carouselExampleIndicators").on("slid.bs.carousel", function () {
      let total = $(".carousel-item").length;
      let currentIndex = $("div.active").index() + 1;
      currentIndex = $(".carousel-item .active").index() + 1;
      let text = currentIndex + "/" + total;
      return text;
    });
  };

 
  render() {
     return (
      <div className="container carouselContainer">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <div className="carousel-indicators"></div> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={this.props.activePic}
                className="d-block w-100 carouselImage"
                alt="..."
              ></img>
            </div>
            {this.props.pics}
            <h3 id="#slideText">{this.props.pics.length}</h3>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Carousel;
