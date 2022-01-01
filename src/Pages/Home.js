import React from "react";
import Cards from "../Component/Cards/Cards"
import seaSide from "../Assets/seaSidePic.png";
import CoverImage from "../Component/CoverImage/CoverImage";
import Layout from "../Containers/Layout/Layout"

class Home extends React.Component {
  render() {
    return (
      <div className="container">
       < Layout>
         <CoverImage text="Chez vous, partout et ailleurs" image={seaSide} />
        <Cards logement={this.props.logement} />
        </Layout>
        </div>
    );
  }
}

export default Home;
