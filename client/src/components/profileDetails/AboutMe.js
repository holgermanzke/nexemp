import React from "react";
import styled from "@emotion/styled";

const About = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 60%;
  max-height: 150px;
  border-radius: 15px;
  margin-top: 30px;
  align-self: center;
`;

const Headline = styled.h3`
  font-size: 1rem;
  padding: 8px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0 8px 8px 8px;
  margin: 0;
`;

export default function AboutMe({ aboutMe }) {
  return (
    <About>
      <Headline>About Me:</Headline>
      <Description>{aboutMe}</Description>
    </About>
  );
}
