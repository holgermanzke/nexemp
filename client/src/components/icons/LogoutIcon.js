import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Svg = styled.svg`
  margin-top: 39px;
  margin-right: 25px;
  width: 25px;
  height: 21.875px;
`;

const Logout = styled.path`
  fill: #f4f4f4;
  :hover {
    fill: ${props => props.theme.colors.secondary};
  }
  :active {
    fill: ${props => props.theme.colors.primary};
  }
`;

export default function LogoutIcon() {
  return (
    <Link to="/">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="31.5"
        viewBox="0 0 36 31.5"
      >
        <Logout d="M13.5,0V4.5h18V27h-18v4.5H36V0ZM9,9,0,15.75,9,22.5V18H27V13.5H9Z" />
      </Svg>
    </Link>
  );
}
