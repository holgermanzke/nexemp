import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 400px;
  height: 10px;
  border-radius: 15px;
  margin: 10px;
  background: ${props => props.theme.colors.primary};
  outline: none;
  transition: opacity 0.2s;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
  }
`;
const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 700px;
`;
const Value = styled.div`
  /* align-self: end; */
`;

export default function InputSliderLarge({ value, onChange }) {
  const exactValue = value / 2;
  return (
    <>
      <ExperienceContainer>
        <Label>
          Berufserfahrung:
          <StyledSlider
            type="range"
            min="0"
            max="41"
            step="1"
            value={value}
            onChange={onChange}
          />
        </Label>
        <Value>
          {exactValue > 20 ? "mehr als 20 Jahre" : `${exactValue} Jahre`}
        </Value>
      </ExperienceContainer>
    </>
  );
}
