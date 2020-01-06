import React from "react";
import StyledSpan from "./StyledSpan";
import InputSlider from "./InputSlider";
import SearchWrapper from "./SearchWrapper";
import SearchLabel from "./SearchLabel";
import SearchValue from "./SearchValue";

export default function SearchJobExperience({ value, onChange }) {
  const exactValue = value / 2;
  return (
    <>
      <SearchWrapper>
        <SearchLabel>
          <StyledSpan label="Berufserfahrung" />
          <InputSlider
            min="0"
            max="41"
            step="1"
            value={value}
            onChange={onChange}
            sliderWidth="350px"
          />
        </SearchLabel>
        <SearchValue>
          {exactValue > 20 ? "mehr als 20 Jahre" : `${exactValue} Jahre`}
        </SearchValue>
      </SearchWrapper>
    </>
  );
}
