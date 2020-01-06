import React from "react";
import styled from "@emotion/styled";

const Span = styled.span`
  width: 200px;
  height: auto;
`;

export default function StyledSpan({ label }) {
  return <Span>{label}</Span>;
}
