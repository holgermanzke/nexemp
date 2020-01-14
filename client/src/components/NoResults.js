import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const Div = styled.div`
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  color: ${props => props.theme.colors.secondary};
`;

export default function NoResults() {
  return (
    <Div>
      Zu Ihrer Suche gibt es keine Ergebnisse.
      <Button to="/search">zur Suche</Button>
    </Div>
  );
}
