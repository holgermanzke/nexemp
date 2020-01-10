import React from "react";
import styled from "@emotion/styled";

const H4 = styled.h4`
  margin: 5px 25px 0 35px;
  font-size: 0.9rem;
  font-weight: 200;
`;
export default function Experience({ experience }) {
  return <H4>Berufserfahrung: {experience} Jahre</H4>;
}
