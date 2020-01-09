import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 15px;
  margin: 25px 25px 0 25px;
  object-fit: cover;
  object-position: top center;
`;

export default function Avatar({
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg",
  alt
}) {
  return <Image src={imgSrc} alt={alt} />;
}
