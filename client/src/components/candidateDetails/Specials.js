import React from "react";
import styled from "@emotion/styled";
import CheckIcon from "../icons/CheckIcon";

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const Details = styled.h3`
  margin: 5px 25px 0 10px;
  font-size: 0.9rem;
  font-weight: 200;
`;

export default function Specials({ special1, special2 }) {
  return (
    <>
      {special1 && (
        <FlexWrapper>
          <CheckIcon />
          <Details>{special1}</Details>
        </FlexWrapper>
      )}
      {special2 !== null && special2 !== special1 && (
        <FlexWrapper>
          <CheckIcon />
          <Details>{special2}</Details>
        </FlexWrapper>
      )}
    </>
  );
}
