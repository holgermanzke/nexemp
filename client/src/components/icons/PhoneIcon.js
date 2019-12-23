import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${props => props.theme.colors.text};
  width: 17px;
  height: 17px;
  margin-left: 35px;
`;
const Path = styled.path``;

export default function PhoneIcon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
      <Path
        class="a"
        d="M22.164,1.1,17.492.027a1.085,1.085,0,0,0-1.235.624L14.1,5.682a1.075,1.075,0,0,0,.31,1.258l2.722,2.228a16.648,16.648,0,0,1-7.96,7.96L6.945,14.406a1.077,1.077,0,0,0-1.258-.31L.656,16.252a1.091,1.091,0,0,0-.629,1.24L1.1,22.164A1.078,1.078,0,0,0,2.156,23,20.841,20.841,0,0,0,23,2.156,1.077,1.077,0,0,0,22.164,1.1Z"
        transform="translate(0.001 0.001)"
      />
    </Svg>
  );
}
