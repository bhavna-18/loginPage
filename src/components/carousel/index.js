import React, { Component } from "react";
import "./style.css";
import $ from "jquery";

$(function() {
  var carousel = $(".carousel ul");
  var carouselChild = carousel.find("li");
  var clickCount = 0;
  var canClick = true;
  var itemWidth = carouselChild.first().outerWidth(true); //Including margin
  var lastItem;

  var getMiddleElement = function($carousel) {
    var carouselWidth = $carousel.width();
    var $items = $carousel.find("li");
    var lastVisibleItem = 0;
    $items.each(function(index, el) {
      if ($(this).position().left >= carouselWidth) {
        return false;
      }
      lastVisibleItem = index;
    });

    return $items.eq(Math.floor(lastVisibleItem / 2));
  }; // getMiddleElement

  var $middle = getMiddleElement($(".carousel")).toggleClass("expanded");

  $(".btnNext").click(function() {
    if (canClick) {
      canClick = false;
      clickCount++;

      carousel.stop(false, true).animate(
        {
          left: "-=" + itemWidth
        },
        600,
        function() {
          lastItem = carousel.find("li:first");
          lastItem.remove().appendTo(carousel);
          carousel.css("left", 0);
          canClick = true;

          $middle.toggleClass("expanded");
          $middle = getMiddleElement($(".carousel")).toggleClass("expanded");
        }
      );
    }
  }); // btnNext

  $(".btnPrevious").click(function() {
    if (canClick) {
      canClick = false;
      clickCount--;

      lastItem = carousel.find("li:last");
      lastItem.remove().prependTo(carousel);
      carousel.css("left", -itemWidth);

      carousel.finish(true).animate(
        {
          left: "+=" + itemWidth
        },
        300,
        function() {
          canClick = true;

          $middle.toggleClass("expanded");
          $middle = getMiddleElement($(".carousel")).toggleClass("expanded");
        }
      );
    }
  });
});

export default class Carousel extends Component {
  renderView() {
    let arr = [];
    for (let i = 0; i < this.props.data.length; i++) {
      arr.push(
        <li className="outerContainer" id={"#item" + i}>
          <img src={this.props.data[i].icon} className="icon" alt=""></img>
          <p className="headingText">{this.props.data[i].heading}</p>
          <p>{this.props.data[i].detail}</p>
        </li>
      );
    }
    return <div style={{ backgroundColor: "blue" }}>{arr}</div>;
  }
  render() {
    return (
      <div class="carouselOuterContainer">
        <div class="carousel">
          <ul>{this.renderView()}</ul>
          <div className="bottomView">
            <div class="btnPrevious">Previous </div>
            <div class="btnNext">Next</div>
            <div className="buttons">
              <span className="btn">•</span>
              <span className="btn">•</span>
              <span className="btnSelected">•</span>
              <span className="btn">•</span>
              <span className="btn">•</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
