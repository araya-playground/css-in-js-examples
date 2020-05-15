import { css } from "linaria";

const cardBackground = "#FAA3A3";
export const globals = css`
  :global() {
    :root {
      --max-container-width: 1024px;
    }
    .container {
      max-width: var(--max-container-width);
      margin: 0 auto;
    }
    .container__flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .common-card__red {
      background: ${cardBackground};
    }
  }
`;
