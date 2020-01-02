import React from "react";
import styled from "@emotion/styled";
import InputLarge from "../components/InputLarge";

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
  return (
    <Container>
      <InputLarge />
    </Container>
  );
}
