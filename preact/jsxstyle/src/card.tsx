import { FunctionComponent, h } from "preact";
import { Box, Inline } from "jsxstyle/preact";

export const CardWithJsxstyle: FunctionComponent = () => {
  return (
    <Box
      background-color="#ffffff"
      box-shadow="0 0 20px rgba(0, 0, 0, 0.5)"
      height="400px"
      width="300px"
      padding="20px"
    >
      <div>
        <Inline
          color="#6450a1"
          font-size="2rem"
          display="inline-block"
          margin="1em"
        >
          <span>Card Example</span>
        </Inline>
      </div>
    </Box>
  );
};
