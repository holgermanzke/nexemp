import React from "react";
import styled from "@emotion/styled";

const Prof = styled.h2`
  margin: 5px 25px 0 35px;
  font-size: 1.1rem;
`;

export default function Profession({ profession }) {
  return <Prof>{profession}</Prof>;
}
