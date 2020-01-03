import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: ${props => props.width};
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

export default function InputField({ inputWidth }) {
  return <Input width={inputWidth} />;
}
