import {css} from "emotion";
import {FunctionComponent, h} from "preact";

export const CardWithEmotion: FunctionComponent = () => {
    return (
        <div className={css`
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
`}>
      <span className={css`
  color: #6450a1;
  font-size: 2rem;
  display: inline-block;
  margin: 1em;
`}>Card Example</span>
        </div>
    );
};
