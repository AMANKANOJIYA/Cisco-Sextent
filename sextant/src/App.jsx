import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <div className="Exhibit-views">
        <Exhibit name="Exhibit : 1"></Exhibit>
        <Exhibit name="Exhibit : 2"></Exhibit>
        <Exhibit name="Exhibit : 3"></Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
