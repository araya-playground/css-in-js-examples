"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const emotion_1 = require("emotion");
const CardTitle = (props) => {
    return (preact_1.h("span", { className: emotion_1.css `
        color: #6450a1;
        font-size: 2rem;
        margin: 1em;
      ` }, props.title));
};
exports.Card = () => {
    return (preact_1.h("div", { className: emotion_1.css `
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        height: 400px;
        width: 300px;
        padding: 20px;
      ` },
        preact_1.h(CardTitle, { title: "Card Example" })));
};
