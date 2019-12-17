import React from "react";
import styled from "@emotion/styled";

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
`;

function NavBar() {
  return (
    <NavContainer>
      <NavButton />
      <NavButton />
      <NavButton />
    </NavContainer>
  );
}
export default NavBar;
