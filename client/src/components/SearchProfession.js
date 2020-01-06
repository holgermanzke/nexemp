import React from "react";
import InputField from "./InputField";
import StyledSpan from "./StyledSpan";
import SearchWrapper from "./SearchWrapper";
import SearchLabel from "./SearchLabel";

export default function SearchProfession({ value, onChange }) {
  return (
    <SearchWrapper>
      <SearchLabel>
        <StyledSpan label="Berufsbezeichnung" />
        <InputField value={value} onChange={onChange} inputWidth="350px" />
      </SearchLabel>
    </SearchWrapper>
  );
}
