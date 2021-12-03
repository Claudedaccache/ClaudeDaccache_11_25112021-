import "./App.css";
import React from "react";
import SiteHeader from "./Views/Base/Header";
import BodyImage from "./Views/Base/Body_image";
import seaSide from "../src/Assets/seaSidePic.png";
import mountain from "../src/Assets/mountains.png";
import Error from "./Views/ErrorPage/Error";
import Carousel from "./Views/LogementPage/Carousel";
import LogementUpperBody from "./Views/LogementPage/LogementUpperBody";
import LogementTag from "./Views/LogementPage/LogementTags";
import LogementRating from "./Views/LogementPage/LogementRating";
import Accordion from "./Views/AboutUsPage/Accordion";
import LogementAccordion from "./Views/LogementPage/LogementAccordion";
import Footer from "./Views/Base/Footer";
import Cards from "./Views/MainPage/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      logement: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/f34t");
    const data = await response.json();
    this.setState({
      logement: data,
      loading: false,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container d-flex flex-column">
          <SiteHeader />
          <Routes>
            <Route
              path="/" 
              element={
                <BodyImage
                  text="Chez vous, partout et ailleurs"
                  image={seaSide}
                />
              }
            >
              <Route
                path="/"
                element={<Cards logement={this.state.logement} />}
              ></Route>
            </Route>

            <Route
              path="/Logement/:id"
              element={<Carousel logement={this.state.logement} />}
            ></Route>

            <Route
              path="/Logement/:id"
              element={<LogementUpperBody logement={this.state.logement} />}
            ></Route>
            <Route
              path="/Logement/:id"
              element={<LogementTag logement={this.state.logement} />}
            ></Route>

            <Route
              path="/Logement/:id"
              element={<LogementRating logement={this.state.logement} />}
            ></Route>

            <Route
              path="/Logement/:id"
              element={
                <LogementAccordion
                  descText="Description"
                  descBody={this.state.logement.description}
                  equipText="Equipment"
                  logement={this.state.logement}
                />
              }
            ></Route>

            <Route
              path="/AboutUs"
              element={<BodyImage text="" image={mountain} />}
            >
              <Route
                path="/AboutUs"
                element={
                  <Accordion
                    text="Fiabilité"
                    itemclass="collapseOne"
                    itemTarget="#collapseOne"
                    itemId="headingOne"
                  />
                }
              ></Route>
              <Route
                path="/AboutUs"
                element={
                  <Accordion
                    text="Respect"
                    itemclass="collapseTwo"
                    itemTarget="#collapseTwo"
                    itemId="headingTwo"
                  />
                }
              ></Route>
              <Route
                path="/AboutUs"
                element={
                  <Accordion
                    text="Service"
                    itemclass="collapseThree"
                    itemTarget="#collapseThree"
                    itemId="headingThree"
                  />
                }
              ></Route>
              <Route
                path="/AboutUs"
                element={
                  <Accordion
                    text="Responsabilité"
                    itemclass="collapseFour"
                    itemTarget="#collapseFour"
                    itemId="headingFour"
                  />
                }
              ></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <SiteHeader />
<div className="homePage">
  <BodyImage text="Chez vous, partout et ailleurs" image={seaSide} />
  <div className="container d-flex flex-row flex-wrap justify-content-between cardsContainer">
    <div className="row row-cols-1 row-cols-md-4">
      {/* {this.state.logement.map((lgmt) =>
              this.state.loading || !this.state.logement ? (
                <div className="loadingMessage">loading...</div>
              ) : (
                <Cards key={lgmt.id} text={lgmt.title} />
              )
            )} */
}
//     </div>
//   </div>
// </div>
// <div className="aboutUs">
{
  /* <BodyImage text="" image={mountain} />

  <Accordion
    text="Fiabilité"
    itemclass="collapseOne"
    itemTarget="#collapseOne"
    itemId="headingOne"
  />
  <Accordion
    text="Respect"
    itemclass="collapseTwo"
    itemTarget="#collapseTwo"
    itemId="headingTwo"
  />
  <Accordion
    text="Service"
    itemclass="collapseThree"
    itemTarget="#collapseThree"
    itemId="headingThree"
  />
  <Accordion
    text="Responsabilité"
    itemclass="collapseFour"
    itemTarget="#collapseFour"
    itemId="headingFour"
  /> */
}
// </div>
// <div className="logementPage">
{
  /* {this.state.logement.map((lgmt) =>
    this.state.loading || !this.state.logement ? (
      <div className="loadingMessage">loading...</div>
    ) : (
      <Carousel
        key={lgmt.id}
        activePic={lgmt.cover}
        pics={lgmt.pictures.map((pic) => {
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
      />
    )
  )} */
}
// <div className="d-flex flex-row justify-content-between">
//   <div>
{
  /* {this.state.logement.map((lgmt) =>
        this.state.loading || !this.state.logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <LogementUpperBody                   
            key={lgmt.id}
            logementTitle={lgmt.title}
            logementLocation={lgmt.location}
          />
        )
      )} */
}

{
  /* {this.state.logement.map((lgmt) =>
        this.state.loading || !this.state.logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <LogementTag
            key={lgmt.id}
            logementTag={lgmt.tags.map((tag) => { return <li className="logementTag">{tag}</li>;
            })}
          />
        )
      )}  */
}
// </div>
// <div>
{
  /* {this.state.logement.map((lgmt) => 
        this.state.loading || !this.state.logement ? (
          <div className="loadingMessage">loading...</div>
        ) : (
          <LogementRating   key={lgmt.id}           
          contactName={lgmt.host.name}
          contactPhoto={lgmt.host.picture}
          rating={lgmt.rating}
          />
        )
      )}  */
}
//   </div>
// </div>

{
  /* {this.state.logement.map((lgmt) =>
    this.state.loading || !this.state.logement ? (
      <div className="loadingMessage">loading...</div>
    ) : (
      <LogementAccordion
        key={lgmt.id}
        descText="Description"
        descBody={lgmt.description}
        equipText="Equipment"
        equipBody={lgmt.equipments.map(equip => <li>{equip}</li>)}
      />
    )
  )} */
}
// </div>
// <div className="errorPage">{/* {<Error />} */}</div>
// <Footer /> */}
