import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
const Image = styled.img`
  max-height: 200px;
  /* max-width: 200px; */
  border-radius: 15px;
  margin: 25px 25px 0 25px;
`;
const Name = styled.h1`
  margin: 10px 25px 0 35px;
  font-size: 1.5rem;
`;
const Profession = styled.h2`
  margin: 5px 25px 0 35px;
  font-size: 1.1rem;
`;

export default function CandidateDetails({
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg",
  alt,
  name,
  profession
}) {
  return (
    <>
      <Container>
        <Image src={imgSrc} alt={alt} />
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </Container>
    </>
  );
}
