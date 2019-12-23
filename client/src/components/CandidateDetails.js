import React from "react";
import styled from "@emotion/styled";
import CheckIcon from "./icons/CheckIcon";
import MailIcon from "./icons/MailIcon";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
const Image = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 15px;
  margin: 25px 25px 0 25px;
  object-fit: cover;
  object-position: top center;
`;
const Name = styled.h1`
  margin: 10px 25px 0 35px;
  font-size: 1.5rem;
`;
const Profession = styled.h2`
  margin: 5px 25px 0 35px;
  font-size: 1.1rem;
`;

const Experience = styled.h4`
  margin: 5px 25px 0 35px;
  font-size: 0.9rem;
  font-weight: 200;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SpecialDetail = styled.h3`
  margin: 5px 25px 0 5px;
  font-size: 0.9rem;
  font-weight: 200;
`;

const Mailadress = styled.p`
  margin: 15px 25px 0 5px;
  font-size: 0.8rem;
  font-weight: 200;
`;

export default function CandidateDetails({
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg",
  alt,
  name,
  profession,
  experience,
  email
}) {
  return (
    <>
      <Container>
        <Image src={imgSrc} alt={alt} />
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
        <Experience>Berufserfahrung: {experience} Jahre</Experience>
        <FlexWrapper>
          <CheckIcon />
          <SpecialDetail>React</SpecialDetail>
        </FlexWrapper>
        <FlexWrapper>
          <CheckIcon />
          <SpecialDetail>Projektmanagement</SpecialDetail>
        </FlexWrapper>
        <FlexWrapper>
          <MailIcon />
          <Mailadress>{email}</Mailadress>
        </FlexWrapper>
      </Container>
    </>
  );
}
