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
  margin: 10px 0 0 30px;
  background: ${props => props.theme.colors.primary};
  outline: none;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const Value = styled.span`
  justify-content: flex-end;
  display: flex;
`;

const StyledSpan = styled.span`
  width: 200px;
  height: auto;
`;

export default function InputSliderLarge({ value, onChange }) {
  const exactValue = value / 2;
  return (
    <>
      <Wrapper>
        <Label>
          <StyledSpan>Berufserfahrung:</StyledSpan>
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
      </Wrapper>
    </>
  );
}
