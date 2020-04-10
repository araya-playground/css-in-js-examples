"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardWithAstroturf = void 0;

var _preact = require("preact");

var _astroturf = require("astroturf");

var styles = require("../../dist/sample-extracted_style.css");

var CardWithAstroturf = function CardWithAstroturf() {
  return (0, _preact.h)("div", {
    className: styles.cardTitle
  }, (0, _preact.h)("span", {
    className: styles.card
  }, "Card Example"));
};

exports.CardWithAstroturf = CardWithAstroturf;