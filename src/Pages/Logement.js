import React from "react";
import Carousel from "../Component/Carousel/Carousel";
import LogementDetails from "../Component/LogementDetails/LogementDetails";
import LogementTag from "../Component/LogementTag/LogementTag";
import LogementContact from "../Component/LogementContact/LogementContact";
import LogementAccordion from "../Component/LogementAccordion/LogementAccordion";
import LogementRating from "../Component/LogementRating/LogementRating";
import Error from "../Pages/Error";
import withRouter from "../Component/Wrapper/wrapper";
import Layout from "../Containers/Layout/Layout";

class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedResidence: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/f34t");
    const data = await response.json();
    const params = this.props.params.id;
    this.setState({
      selectedResidence: this.selectedResidence(data, params),
      loading: false,
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
          <Layout>
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
          </Layout>
        </div>
      );
    } else if (this.state.loading) {
      return <div className="mainLoadingMessage">loading...</div>;
    } else {
      return <Error />;
    }
  }
}

export default withRouter(Logement);
