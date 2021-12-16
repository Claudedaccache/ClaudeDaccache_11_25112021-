import React from "react";
import SiteHeader from "../Views/Base/Header";
import Carousel from "../Views/LogementPage/Carousel";
import LogementDetails from "../Views/LogementPage/LogementDetails";
import LogementTag from "../Views/LogementPage/LogementTags";
import LogementRating from "../Views/LogementPage/LogementRating";
import LogementAccordion from "../Views/LogementPage/LogementAccordion";
import Footer from "../Views/Base/Footer";
import Error from "./Error";

class Logement extends React.Component {
  render() {
    if (this.props.filteredLogement !== null) {
      return (
        <div className="container">
          <SiteHeader />
          <Carousel filteredLogement={this.props.filteredLogement[0]} />
          <div className="d-flex flex-row flex-wrap justify-content-between">
            <div>
              <LogementDetails
                filteredLogement={this.props.filteredLogement[0]}
              />
              <LogementTag filteredLogement={this.props.filteredLogement[0]} />
            </div>
            <div>
              <LogementRating
                filteredLogement={this.props.filteredLogement[0]}
              />
            </div>
          </div>
          <div className=" flex-row flex-wrap justify-content-between ">
            <div>
              {" "}
              <LogementAccordion
                AccordionTitle="Description"
                KeyId={"Description"}
                itemId={"collapseOne"}
                itemDataId={"#collapseOne"}
                accordionBody={this.props.filteredLogement[0].description}
              />
            </div>

            <div>
              <LogementAccordion
                AccordionTitle="Equipment"
                KeyId={"Equipment"}
                itemId={"collapseTwo"}
                itemDataId={"#collapseTwo"}
                accordionBody={this.props.filteredLogement[0].equipments.map(
                  (equip) => (
                    <p key={equip}>{equip}</p>
                  )
                )}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default Logement;
// d-flex flex-row flex-wrap justify-content-between