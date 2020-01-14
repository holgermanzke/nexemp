import React from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";

const Div = styled.div`
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  color: ${props => props.theme.colors.secondary};
`;

export default function MessageSent() {
  return (
    <Div>
      Ihre Nachricht wurde gesendet.
      <Button to="/search">Zurück zur Suche</Button>
    </Div>
  );
}
