import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const SeparatorBox = styled.div`
  height: 95%;
  border-radius: 15px;
  width: 60px;
  background: ${props => props.theme.colors.primary};
  margin: 0 25px;
`;

export default function Separator() {
  return (
    <Wrapper>
      <SeparatorBox />
    </Wrapper>
  );
}
