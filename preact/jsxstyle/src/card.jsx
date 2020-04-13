"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const preact_2 = require("jsxstyle/preact");
exports.CardWithJsxstyle = () => {
    return (<preact_2.Box background-color="#ffffff" box-shadow="0 0 20px rgba(0, 0, 0, 0.5)" height="400px" width="300px" padding="20px">
      <div>
        <preact_2.Inline color="#6450a1" font-size="2rem" display="inline-block" margin="1em">
          <span>Card Example</span>
        </preact_2.Inline>
      </div>
    </preact_2.Box>);
};
