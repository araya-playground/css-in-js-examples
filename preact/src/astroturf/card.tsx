import {FunctionComponent, h} from "preact";
import {css} from 'astroturf';

const styles = css`
.card {
background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
}
  .cardTitle{
  color: #6450a1;
  font-size: 2rem;
  display: inline-block;
  margin: 1em;
  }
`
export const CardWithAstroturf: FunctionComponent = () => {
    return (
        <div className={styles.cardTitle}>
            <span className={styles.card}>Card Example</span>
        </div>
    );
};
