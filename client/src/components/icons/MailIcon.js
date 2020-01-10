import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.text};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
  width: 14px;
  margin-left: 35px;
  margin-top: 15px;
`;
const Path = styled.path``;

export default function MailIcon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.238 21.4">
      <g transform="translate(-0.881 -4.5)">
        <Path d="M5.3,6H23.7A2.307,2.307,0,0,1,26,8.3V22.1a2.307,2.307,0,0,1-2.3,2.3H5.3A2.307,2.307,0,0,1,3,22.1V8.3A2.307,2.307,0,0,1,5.3,6Z" />
        <path d="M26,9,14.5,19.5,3,9" transform="translate(0 -1.244)" />
      </g>
    </Svg>
  );
}
