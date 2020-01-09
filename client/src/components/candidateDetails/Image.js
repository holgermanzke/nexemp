import React from "react";
import styled from "@emotion/styled";

const Picture = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 15px;
  margin: 25px 25px 0 25px;
  object-fit: cover;
  object-position: top center;
`;

export default function Image({ imgSrc, alt }) {
  return <Picture src={imgSrc} alt={alt} />;
}
