import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Page = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.secondary};
  background: ${props => (props.active ? props.theme.colors.secondary : `transparent`)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export default function Pagination({ page }) {
  const [active, setActive] = React.useState(false);
  function handleClick() {
    setActive(!active);
    console.log(active);
  }
  return (
    <Page onClick={handleClick} to="">
      {page}
    </Page>
  );
}
