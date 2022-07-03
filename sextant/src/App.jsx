import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import DisplayAddress from "./components/DisplayAddress";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <div className="Exhibit-views">
          <Exhibit name="Public IPv4 Address">
            <DisplayAddress url="https://api.ipify.org?format=json" />
          </Exhibit>
          <Exhibit name="Public IPv6 Address">
            <DisplayAddress url="https://api64.ipify.org?format=json" />
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
