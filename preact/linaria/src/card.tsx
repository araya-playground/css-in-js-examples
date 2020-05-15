import { FunctionComponent, h } from "preact";
import { css } from "linaria";

const cardStyle = css`
  display: inline-block;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const cardTitleStyle = css`
  color: #6450a1;
  font-size: 2rem;
`;
export const CardWithLinaria: FunctionComponent = () => {
  return (
    <div className={`${cardStyle} common-card__red`}>
      <span className={cardTitleStyle}>Card Example</span>
    </div>
  );
};
