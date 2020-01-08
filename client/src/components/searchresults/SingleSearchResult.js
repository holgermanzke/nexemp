import React from "react";
import styled from "@emotion/styled";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SingleRow = styled.div`
  display: flex;
  align-items: center;
`;

const SingleResult = styled.div`
  height: 100px;
  width: 65%;
  margin: 35px 50px;
  background: ${props => props.theme.colors.primary};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;
const Profession = styled.h2`
  font-size: 1.1rem;
  margin: 0;
`;
const Experience = styled.p`
  font-weight: 200;
`;
const Headline = styled.h3`
  font-size: 1rem;
  margin: 0;
`;
const Paragraph = styled.p`
  font-weight: 200;
  display: flex;
  align-items: space-around;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 10px 25px;
`;

const Span = styled.span`
  background: ${props => props.theme.colors.secondary};
  margin-left: 10px;
  margin-top: 6px;
  border-radius: 15px;
  padding: 0px 10px;
`;

export default function SingleSearchResult({
  profession,
  experience,
  skill1,
  skill2,
  location,
  age,
  profileURL
}) {
  return (
    <Container>
      <SingleRow>
        <SingleResult>
          <Wrapper>
            <Profession>{profession}</Profession>
            {experience && (
              <Experience>Berufserfahrung: {experience} Jahre</Experience>
            )}
          </Wrapper>
          <Wrapper>
            <Paragraph>
              {skill1 && <Span>{skill1}</Span>}
              {skill2 && <Span>{skill2}</Span>}
            </Paragraph>
          </Wrapper>
          <Wrapper>
            <Headline>{location}</Headline>
            {age && <Paragraph>{age} Jahre</Paragraph>}
          </Wrapper>
        </SingleResult>
        <Button to={profileURL}>Profil anzeigen</Button>
      </SingleRow>
    </Container>
  );
}
