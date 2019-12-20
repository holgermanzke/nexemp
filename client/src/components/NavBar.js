import React from "react";
import styled from "@emotion/styled";
import LogoutIcon from "./icons/LogoutIcon";

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 25px;
  margin-right: 25px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  outline: none;
  border-radius: 15px;
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: 100;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border-color: ${props => props.theme.colors.primary};
  }
`;

function NavBar({ onClick }) {
  return (
    <NavContainer>
      <NavButton onClick={onClick}>Suche</NavButton>
      <NavButton onClick={onClick}>Kandidaten</NavButton>
      <NavButton onClick={onClick}>Nachrichten</NavButton>
      <LogoutIcon onClick={onClick} />
    </NavContainer>
  );
}
export default NavBar;
