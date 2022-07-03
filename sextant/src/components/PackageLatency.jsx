import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:55455");

class PackageLatency extends Component {
  constructor() {
    super();
    this.state = {
      Latency: 0,
    };
  }

  componentWillMount() {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (data) => {
      this.setState({ Latency: new Date().getTime() - data.data });
    };
  }
  render() {
    return <span>{this.state.Latency}</span>;
  }
}

export default PackageLatency;
