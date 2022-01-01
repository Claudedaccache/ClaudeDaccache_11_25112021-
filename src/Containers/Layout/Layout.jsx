import React from "react";
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"


class Layout extends React.Component{
  render(){
    return(
      <>
      <Header />
      {this.props.children}
        <Footer />
        </>
    )
  }
}

export default Layout