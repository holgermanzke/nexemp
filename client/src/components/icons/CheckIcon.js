import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  width: 27px;
  height: 20px;
  margin-left: 35px;
  /* margin-top: 10px; */
`;

const Path = styled.path`
  fill: ${props => props.theme.colors.secondary};
`;

export default function CheckIcon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.109,24.184.393,15.468a1.341,1.341,0,0,1,0-1.9l1.9-1.9a1.341,1.341,0,0,1,1.9,0l5.872,5.872L22.634,4.97a1.341,1.341,0,0,1,1.9,0l1.9,1.9a1.341,1.341,0,0,1,0,1.9L11.006,24.184A1.341,1.341,0,0,1,9.109,24.184Z"
        transform="translate(0 -4.577)"
      />
    </Svg>
  );
}
