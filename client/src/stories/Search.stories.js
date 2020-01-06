import React from "react";
import styled from "@emotion/styled";
import SearchProfession from "../components/SearchProfession";
import SearchJobExperience from "../components/SearchJobExperience";
import SearchLocation from "../components/SearchLocation";
import Button from "../components/Button";

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
  const [profession, setProfession] = React.useState("");
  const [experience, setExperience] = React.useState(0);
  const [city, setCity] = React.useState("");
  const [radius, setRadius] = React.useState(10);
  return (
    <Container>
      <SearchProfession
        value={profession}
        onChange={event => setProfession(event.target.value)}
      />
      <SearchJobExperience
        value={experience}
        onChange={event => setExperience(parseInt(event.target.value))}
      />
      <SearchLocation
        cityValue={city}
        cityChange={event => setCity(event.target.value)}
        radiusValue={radius}
        radiusChange={event => setRadius(event.target.value)}
      />
      <Button buttonText="suchen" />
    </Container>
  );
}
