import React, { Component } from "react";
import "./style.css";

export default class SubHeading extends Component {
  render() {
    let heading = this.props.heading;
    let subHeading = this.props.subHeading;
    return (
      <div style={{ flex: 1 }}>
        <div className="outerContainer1">
          <div className="headingContainer">
            <p className="headingText1">{heading}</p>
          </div>
          <div className="imageOuter">
            <img
              src={require("../../assets/Brush_1_.png")}
              alt=""
              className="imageContainer"
            />
          </div>
          <div className="subHeadingContainer">
            <p className="subHeadingText">{subHeading}</p>
          </div>
        </div>
      </div>
    );
  }
}
