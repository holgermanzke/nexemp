import React from "react";
import styled from "@emotion/styled";
import StyledSpan from "./StyledSpan";
import InputField from "./InputField";
import InputSlider from "./InputSlider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Label = styled.label`
  font-size: 1.3rem;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;
const Value = styled.span`
  justify-content: flex-end;
  display: flex;
`;

export default function SearchLocation({
  cityValue,
  cityChange,
  radiusValue,
  radiusChange
}) {
  return (
    <Wrapper>
      <Label>
        <StyledSpan label="Ort" />
        <InputField
          type="number"
          value={cityValue}
          onChange={cityChange}
          inputWidth="140px"
        />
        <InputSlider
          value={radiusValue}
          onChange={radiusChange}
          sliderWidth="140px"
          min="10"
          max="210"
          step="10"
        />
      </Label>
      <Value>
        {radiusValue > 200
          ? "mehr als 200 Kilometer"
          : `${radiusValue} Kilometer`}
      </Value>
    </Wrapper>
  );
}
