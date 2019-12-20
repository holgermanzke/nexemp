import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  max-height: 200px;
  max-width: 200px;
  border-radius: 15px;
  margin: 20px;
`;
export default function CandidateDetails({
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg",
  alt
}) {
  return <Image src={imgSrc} alt={alt} />;
}
