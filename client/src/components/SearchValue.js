import React from "react";
import styled from "@emotion/styled";

const Value = styled.span`
  justify-content: flex-end;
  display: flex;
`;

export default function SearchValue({ children }) {
  return <Value>{children}</Value>;
}
