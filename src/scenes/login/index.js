import React, { Component } from "react";
import Header from "../../components/header";
import SubHeading from "../../components/subheading";
import SmallCarousel from "../../components/smallCarousel";
import Carousel from "../../components/carousel";
import "./style.css";

const Data = require("../../utilities/smallCarousel");

export default class Login extends Component {
  renderTopView() {
    return (
      <div style={{ flex: 1 }}>
        <div className="backgroundImage">
          <div className="headerView">
            <Header data={Data.MENU_ITEM} />
          </div>
        </div>
      </div>
    );
  }

  renderUpperMiddleView() {
    return (
      <div className="upperMiddleOuterContainer">
        <div>
          <SubHeading
            heading={"Want to Eat?"}
            subHeading={
              "Try our Most Delicious food and it usually take minutes to deliver!"
            }
          />
        </div>
        <div style={{ marginTop: "10%" }}>
          <SmallCarousel data={Data.CAROUSEL_DATA} />
        </div>
      </div>
    );
  }

  renderBottomMiddleView() {
    return (
      <div style={{ width: "auto" }}>
        <img
          src={require("../../assets/Group 1397.png")}
          className="bmvImage"
          alt=""
        />
        <div className="carouselView">
          <Carousel data={Data.CONTENT} />
        </div>
        <img
          src={require("../../assets/Group 1419.png")}
          className="bmvImage"
          alt=""
        />
      </div>
    );
  }

  renderComments() {
    return (
      <div className="outerCommentView">
        <span className="leftView">
          <img
            src={require("../../assets/beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food_152625-788.png")}
            alt=""
            className="ladyImage"
          />
          <div className="rectangle"></div>
        </span>
        <span className="rightView">
          <img
            src={require("../../assets/Group 1346.png")}
            alt=""
            className="convoImage"
          />
          <p className="convoText">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className="nameText">Neena Mittal</p>
          <p className="companyText">CEO, Abc company</p>
          <div className="indexView">
            <div className="orangeIndex"></div>
            <div className="whiteIndex"></div>
            <div className="whiteIndex"></div>
          </div>
        </span>
      </div>
    );
  }

  renderBottomView() {
    return (
      <div style={{ flex: 1 }}>
        <div>
          <SubHeading
            heading={"Client Testimonials"}
            subHeading={
              "Try our Most Delicious food and it usually take minutes to deliver!"
            }
          />
          {this.renderComments()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        {this.renderTopView()}
        {/* {this.renderUpperMiddleView()}
        {this.renderBottomMiddleView()}
        {this.renderBottomView()} */}
      </div>
    );
  }
}
