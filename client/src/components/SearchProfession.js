import React from "react";
import InputField from "./InputField";
import StyledSpan from "./StyledSpan";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

export default function SearchProfession({ value, onChange }) {
  return (
    <Wrapper>
      <Label>
        <StyledSpan label="Berufsbezeichnung" />
        <InputField value={value} onChange={onChange} inputWidth="350px" />
      </Label>
    </Wrapper>
  );
}
