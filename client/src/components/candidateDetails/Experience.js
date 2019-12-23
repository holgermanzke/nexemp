import React from "react";
import styled from "@emotion/styled";

const Exper = styled.h4`
  margin: 5px 25px 0 35px;
  font-size: 0.9rem;
  font-weight: 200;
`;
export default function Experience({ experience }) {
  return <Exper>Berufserfahrung: {experience} Jahre</Exper>;
}
