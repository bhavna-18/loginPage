import React, { Component } from "react";
import "./style.css";

export default class SmallCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderRadius: "",
      boxShadow: "",
      value: ""
    };
  }

  changeStyling(value) {
    this.setState({
      value: value.name,
      borderRadius: 2.5,
      boxShadow: "0 7.5px 7.5px 0 rgba(0, 0, 0, 0.07)"
    });
  }

  renderView() {
    let arr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      arr.push(
        <span
          style={{
            borderRadius:
              this.state.value === this.props.data[i].name
                ? this.state.borderRadius
                : 0,
            boxShadow:
              this.state.value === this.props.data[i].name
                ? this.state.boxShadow
                : "0 0 0 0 rgba(0, 0, 0, 0)"
          }}
          className="cardContainer"
          onClick={item => this.changeStyling(this.props.data[i])}
        >
          <img src={this.props.data[i].icon} alt=""></img>
          <p>{this.props.data[i].name.toUpperCase()}</p>
        </span>
      );
    }
    return <div>{arr}</div>;
  }

  render() {
    return <div class="outerCarouselContainer">{this.renderView()}</div>;
  }
}
