import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-size: 1.3rem;
  width: 60%;
  display: flex;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  margin-left: 30px;
  background: ${props => props.theme.colors.text};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 5px 20px;
  outline: none;
  font-size: 1rem;
  color: ${props => props.theme.colors.background};
`;

const StyledSpan = styled.span`
  width: 200px;
  height: auto;
`;

export default function InputLarge() {
  return (
    <Label>
      <StyledSpan>Berufsbezeichnung:</StyledSpan>
      <Input />
    </Label>
  );
}
