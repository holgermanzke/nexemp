import React from "react";
import styled from "@emotion/styled";
import LogoutIcon from "./icons/LogoutIcon";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  position: absolute;
  left: 550px;
  top: 0;
`;

const NavButton = styled(Link)`
  width: 150px;
  height: 50px;
  margin-top: 25px;
  margin-right: 25px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  /* outline: none; */
  border-radius: 15px;
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: 100;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border-color: ${props => props.theme.colors.primary};
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <NavButton to="/search">Suche</NavButton>
      <NavButton to="/mycandidates">Kandidaten</NavButton>
      <NavButton to="message">Nachrichten</NavButton>
      <LogoutIcon />
    </NavContainer>
  );
}
export default NavBar;
