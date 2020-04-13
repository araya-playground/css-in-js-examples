"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const astroturf_1 = __importStar(require("astroturf"));
const styles = astroturf_1.css `
.card {
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
}
`;
const CardTitle = astroturf_1.default('span') `
  color: #6450a1;
  font-size: 2rem;
  display: inline-block;
  margin: 1em;
`;
exports.CardWithAstroturf = () => {
    return (<div className={styles.cardTitle}>
            <CardTitle>Card Example</CardTitle>
        </div>);
};
