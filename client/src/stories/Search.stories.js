import React from "react";
import styled from "@emotion/styled";
import SearchProfession from "../components/SearchProfession";
import SearchExperience from "../components/SearchExperience";
import SearchLocation from "../components/SearchLocation";

export default {
  title: "Candidate Search"
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export function Search() {
  const [profession, setProfession] = React.useState("Null");
  const [radius, setRadius] = React.useState(0);
  return (
    <Container>
      <SearchProfession
        value={profession}
        onChange={event => setProfession(event.target.value)}
      />
      <SearchExperience
        value={radius}
        onChange={event => setRadius(parseInt(event.target.value))}
      />
      <SearchLocation />
    </Container>
  );
}
