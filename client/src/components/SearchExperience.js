import React from "react";
import styled from "@emotion/styled";
import StyledSpan from "./StyledSpan";
import InputSlider from "./InputSlider";

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const Value = styled.span`
  justify-content: flex-end;
  display: flex;
`;

export default function SearchExperience({ value, onChange }) {
  const exactValue = value / 2;
  return (
    <>
      <Wrapper>
        <Label>
          <StyledSpan label="Berufserfahrung" />
          <InputSlider
            type="range"
            min="0"
            max="41"
            step="1"
            value={value}
            onChange={onChange}
            sliderWidth="400px"
          />
        </Label>
        <Value>
          {exactValue > 20 ? "mehr als 20 Jahre" : `${exactValue} Jahre`}
        </Value>
      </Wrapper>
    </>
  );
}
