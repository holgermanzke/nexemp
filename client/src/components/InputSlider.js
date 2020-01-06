import React from "react";
import styled from "@emotion/styled";

const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: ${props => props.width};
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

export default function InputSlider({
  value,
  onChange,
  sliderWidth,
  min,
  max,
  step
}) {
  return (
    <>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        width={sliderWidth}
      />
    </>
  );
}
