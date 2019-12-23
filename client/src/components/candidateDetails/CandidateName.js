import React from "react";
import styled from "@emotion/styled";

const Name = styled.h1`
  margin: 10px 25px 0 35px;
  font-size: 1.5rem;
`;

export default function CandidateName({ name }) {
  return <Name>{name}</Name>;
}
