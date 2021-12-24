import React from "react";
import SiteHeader from "../Views/Base/Header";
import Carousel from "../Views/LogementPage/Carousel";
import LogementDetails from "../Views/LogementPage/LogementDetails";
import LogementTag from "../Views/LogementPage/LogementTags";
import LogementContact from "../Views/LogementPage/LogementContact";
import LogementAccordion from "../Views/LogementPage/LogementAccordion";
import LogementRating from "../Views/LogementPage/LogementRating";
import Footer from "../Views/Base/Footer";
import Error from "./Error";
import withRouter from "../Views/Base/Wrapper";

class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResidence: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/f34t");
    const data = await response.json();
    const params = this.props.params.id;
    // const residences = this.props.filteredLogement;
    this.setState({
      selectedResidence: this.selectedResidence(data, params),
    });
  }

  selectedResidence(residences, params) {
    for (let i = 0; i < residences.length; i++) {
      if (residences[i].id === params) {
        return residences[i];
      }
    }
    return null;
  }

  render() {
    if (this.state.selectedResidence !== null) {
      return (
        <div className="container">
          <SiteHeader />
          <Carousel Logement={this.state.selectedResidence} />
          <div className="lgmtInfo">
            <div className="lgmtDetails">
              <LogementDetails Logement={this.state.selectedResidence} />
              <LogementTag Logement={this.state.selectedResidence} />
            </div>
            <div className="d-flex flex-column contactDetails">
              <div className="contact">
                <LogementContact Logement={this.state.selectedResidence} />
              </div>
              <div className="rating">
                <LogementRating Logement={this.state.selectedResidence} />
              </div>
            </div>
          </div>
          <div className=" d-flex flex-row flex-wrap justify-content-between">
            <div className="lgmtAccordion">
              {" "}
              <LogementAccordion
                AccordionTitle="Description"
                KeyId={"Description"}
                itemId={"collapseOne"}
                itemDataId={"#collapseOne"}
                accordionBody={this.state.selectedResidence.description}
              />
            </div>

            <div className="lgmtAccordion">
              <LogementAccordion
                AccordionTitle="Equipment"
                KeyId={"Equipment"}
                itemId={"collapseTwo"}
                itemDataId={"#collapseTwo"}
                accordionBody={this.state.selectedResidence.equipments.map(
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

export default withRouter(Logement);
