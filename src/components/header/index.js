import React, { PureComponent } from "react";
import "./style.css";

export default class Header extends PureComponent {
  renderMenuItems() {
    let arr = this.props.data.map(item => {
      return <p className="headerText">{item}</p>;
    });
    return arr;
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="innerContainer">
          <span className="headerContentContainer">
            {this.renderMenuItems()}
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
