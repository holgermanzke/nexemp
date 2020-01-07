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
  height: 70px;
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
`;

const Wrapper = styled.div`
  margin: 10px 25px;
`;

const Span = styled.span`
  background: ${props => props.theme.colors.secondary};
  margin-left: 10px;
  border-radius: 15px;
  padding: 0px 10px;
`;

export default function SingleSearchResult() {
  return (
    <Container>
      <SingleRow>
        <SingleResult>
          <Wrapper>
            <Profession>Web Developerin</Profession>
            <Experience>Berufserfahrung: 4 Jahre</Experience>
          </Wrapper>
          <Wrapper>
            {/* <Headline>Skills</Headline> */}
            <Paragraph>
              <Span>React</Span> <Span>Projektmanagement</Span>
            </Paragraph>
          </Wrapper>
          <Wrapper>
            <Headline>Köln</Headline>
            <Paragraph>25 Jahre</Paragraph>
          </Wrapper>
        </SingleResult>
        <Button to="#">Profil anfragen</Button>
      </SingleRow>
    </Container>
  );
}
