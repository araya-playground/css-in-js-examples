import styled from "styled-components";
import React from "react";

const CardTitle = styled.span`
  color: #6450a1;
  font-size: 2rem;
  margin: 1em;
`;

const StyledCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 300px;
  padding: 20px;
`;

export const CardWithStyledComponents: React.FC = () => {
  return (
    <StyledCard>
      <CardTitle>Card Example</CardTitle>
    </StyledCard>
  );
};
