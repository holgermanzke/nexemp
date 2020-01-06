import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

export default function SearchLabel({ children }) {
  return <Label>{children}</Label>;
}
