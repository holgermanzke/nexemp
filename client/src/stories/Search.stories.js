import React from "react";
import styled from "@emotion/styled";
import InputLarge from "../components/InputLarge";
import InputSliderLarge from "../components/InputSliderLarge";

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
  const [radius, setRadius] = React.useState(0);
  return (
    <Container>
      <InputLarge />
      <InputSliderLarge
        value={radius}
        onChange={event => setRadius(parseInt(event.target.value))}
      />
    </Container>
  );
}
