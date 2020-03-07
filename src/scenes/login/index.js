import React, { Component } from "react";
import Header from "../../components/header";
import "./style.css";
import constant from "./constant";

export default class Login extends Component {
  renderTopView() {
    return (
      <div style={{ flex: 1 }}>
        <div className="backgroundImage">
          <div className="headerView">
            <Header />
          </div>
          <div>
            <div style={{ backgroundColor: "voilet" }}>
              <img
                src={require("../../assets/Group 1312.png")}
                alt="icon"
                className="burgerImage"
              />
            </div>
            <div className="middleTextContainer">
              <p className="partyText"> Party Time!</p>
              <div className="orangeImageContainer">
                <p className="offerText">
                  Buy any 2 burgers and get 1.5 L Pepsi free
                </p>
              </div>
              <div className="buttonContainer">
                <p className="orderNowText">order now -></p>
              </div>
            </div>

            {/**call the party text */}
            {/**call the orange fire image */}
            {/**call order now button */}
          </div>
        </div>
        <div className="separator"></div>
      </div>
    );
  }

  renderUpperMiddleView() {
    return (
      <div style={{ flex: 1 }}>
        upper middle view
        {/**want to eat text */}
        {/**subtitle */}
        {/**image carousel */}
      </div>
    );
  }

  renderBottomMiddleView() {
    return (
      <div style={{ flex: 1, backgroundColor: "blue" }}>
        middle view
        {/**call the carousel component */}
      </div>
    );
  }

  renderBottomView() {
    return (
      <div style={{ flex: 1, backgroundColor: "cornflowerblue" }}>
        some random text
      </div>
    );
  }

  render() {
    return <div style={{ flex: 1 }}>{this.renderTopView()}</div>;
  }
}
