"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const emotion_1 = require("emotion");
const cardStyle = emotion_1.css `
  color: #6450a1;
  font-size: 2rem;
  display: inline-block;
  margin: 1em;
`;
const cardTitleStyle = emotion_1.css `
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
`;
exports.CardWithAstroturf = () => {
    return (<div className={cardStyle}>
      <span className={cardTitleStyle}>Card Example</span>
    </div>);
};
