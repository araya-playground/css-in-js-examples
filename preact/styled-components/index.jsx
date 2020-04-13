"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const preact_1 = require("preact");
const CardTitle = styled_components_1.default.span `
  color: #6450a1;
  font-size: 2rem;
  margin: 1em;
`;
const StyledCard = styled_components_1.default.div `
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
`;
exports.CardWithStyledComponents = () => {
    return (<StyledCard>
      <CardTitle>Card Example</CardTitle>
    </StyledCard>);
};
