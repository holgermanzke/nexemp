import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 580px;
`;

export default function SearchWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
