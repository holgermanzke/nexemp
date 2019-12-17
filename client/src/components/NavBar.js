import React from "react";
import styled from "@emotion/styled";
import logout from "../resources/logout.svg";

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

const LogoutIcon = styled.img`
  width: 25px;
  height: 21.875px;
  margin-top: 39px;
  margin-right: 25px;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border-color: ${props => props.theme.colors.primary};
  }
`;

function NavBar(navPage) {
  return (
    <NavContainer>
      <NavButton>Suche</NavButton>
      <NavButton>Kandidaten</NavButton>
      <NavButton>Nachrichten</NavButton>
      <LogoutIcon src={logout} />
    </NavContainer>
  );
}
export default NavBar;
