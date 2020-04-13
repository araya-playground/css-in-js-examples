import { FunctionComponent, h } from "preact";
import { css } from "emotion";

const cardStyle = css`
  color: #6450a1;
  font-size: 2rem;
  display: inline-block;
  margin: 1em;
`;

const cardTitleStyle = css`
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
`;
export const CardWithAstroturf: FunctionComponent = () => {
  return (
    <div className={cardStyle}>
      <span className={cardTitleStyle}>Card Example</span>
    </div>
  );
};
