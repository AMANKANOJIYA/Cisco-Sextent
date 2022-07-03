import React, { Component } from 'react';
import './main.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <img src="cisco.png" id="logo-cico" alt="" />
                <h1>{this.props.bannerText}</h1>
            </div>
        );
    }
}

export default Banner;