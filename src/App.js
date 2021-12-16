import "../src/App.css";
import React from "react";
import Error from "./Pages/Error";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Logement from "./Pages/Logement";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      logement: [],
      filteredLogement: null,
    };
  }
  

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/f34t");
    const data = await response.json();
    const storedData = localStorage.getItem("id");
    console.log(storedData);
    this.setState({
      logement: data,
      loading: false,
      filteredLogement: data.filter((itm) => {
        if (itm.id === "c67ab8a7") {
          return itm;
        }
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home logement={this.state.logement} />}
            ></Route>

            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route
              path={"/Logement/:id"}
              element={
                <Logement filteredLogement={this.state.filteredLogement} />
              }
            ></Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
