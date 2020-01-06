import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export default function SearchWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
