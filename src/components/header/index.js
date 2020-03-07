import React, { PureComponent } from "react";
import "./style.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div className="headerContainer">
        <div className="innerContainer">
          <span className="headerContentContainer">
            <p className="headerText">Home</p>
            <p className="headerText">Menu</p>
            <p className="headerText">Caller</p>
            <p className="headerText">Testimonials</p>
            <p className="headerText">Contact Us</p>
          </span>
          <span className="headerImageContainer">
            <img
              src={require("../../assets/Group 1300.png")}
              alt="Search"
              className="headerImage"
            />
            <img
              src={require("../../assets/Group 1399.png")}
              alt="Profile"
              className="headerImage"
            />
            <img
              src={require("../../assets/Group 1398.png")}
              alt="Order"
              className="headerImage"
            />
          </span>
        </div>
      </div>
    );
  }
}
