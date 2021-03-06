import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
`;
const Div = styled.div`
  margin: 10px;
`;

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

export default function Pagination({ totalResults }) {
  // const [active, setActive] = React.useState(false);
  const resultsPerPage = 10;
  const totResults = totalResults;
  const pageNumbers = [];
  let totalResultPages = Math.ceil(totResults / resultsPerPage);

  for (let i = 1; i <= totalResultPages; i++) {
    pageNumbers.push(i);
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const test = query.get("prof");

  return (
    <Container>
      {pageNumbers.map(number => (
        <Div key={number}>
          <Page to={`/candidates?prof=${test}&page=${number}`}>{number}</Page>
        </Div>
      ))}
    </Container>
  );
}
