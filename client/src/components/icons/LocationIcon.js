import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  width: 12.07px;
  height: 17.24px;
  fill: ${props => props.theme.colors.text};
  margin-left: 35px;
`;
const Path = styled.path`
  width: 12.07px;
  height: 17.24px;
`;
export default function LocationIcon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.5 25">
      <Path
        d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z"
        transform="translate(-7.5 -3)"
      />
    </Svg>
  );
}
