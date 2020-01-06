import React from "react";
import StyledSpan from "./StyledSpan";
import InputField from "./InputField";
import InputSlider from "./InputSlider";
import SearchWrapper from "./SearchWrapper";
import SearchLabel from "./SearchLabel";
import SearchValue from "./SearchValue";

export default function SearchLocation({
  cityValue,
  cityChange,
  radiusValue,
  radiusChange
}) {
  return (
    <SearchWrapper>
      <SearchLabel>
        <StyledSpan label="Ort" />
        <InputField
          type="number"
          value={cityValue}
          onChange={cityChange}
          inputWidth="160px"
        />
        <InputSlider
          value={radiusValue}
          onChange={radiusChange}
          sliderWidth="160px"
          min="10"
          max="210"
          step="10"
        />
      </SearchLabel>
      <SearchValue>
        {radiusValue > 200
          ? "mehr als 200 Kilometer"
          : `${radiusValue} Kilometer`}
      </SearchValue>
    </SearchWrapper>
  );
}
