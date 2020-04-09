import preact, { h } from "preact";
import { css } from "emotion";

const CardTitle: preact.FunctionComponent<{ title: string }> = (props) => {
  return (
    <span
      className={css`
        color: #6450a1;
        font-size: 2rem;
        margin: 1em;
      `}
    >
      {props.title}
    </span>
  );
};

export const Card: preact.FunctionComponent = () => {
  return (
    <div
      className={css`
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        height: 400px;
        width: 300px;
        padding: 20px;
      `}
    >
      <CardTitle title={"Card Example"} />
    </div>
  );
};
