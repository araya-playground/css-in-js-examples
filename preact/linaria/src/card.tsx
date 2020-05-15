import { FunctionComponent, h } from "preact";
import { css } from "linaria";
import { defaultCardBgColor } from "./global-styles";

const cardStyle = css`
  display: inline-block;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const cardTitleStyle = css`
  color: #6450a1;
  font-size: 2rem;
`;

type Props = {
  bgColor?: string;
};
export const CardWithLinaria: FunctionComponent<Props> = ({
  bgColor,
}: Props) => {
  return (
    <div
      className={`${cardStyle} common-card__red`}
      style={{ "background-color": bgColor ?? defaultCardBgColor }}
    >
      <span className={cardTitleStyle}>Card Example</span>
    </div>
  );
};
