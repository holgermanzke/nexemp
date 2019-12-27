import React from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMe = styled.div`
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

const CareerHeadline = styled.h2`
  font-size: 1.4rem;
  margin: 35px 0 0 30px;
`;

const CareerWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const CareerDate = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  width: 200px;
  background: ${props => props.theme.colors.primary};
  border-radius: 15px;
  margin: 0 0 0 30px;
  text-align: center;
  padding: 10px 0;
  max-height: 40px;
`;

const CareerCompany = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
const CareerProfession = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
`;

const Contact = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  width: 150px;
  border-radius: 15px;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: none;
  outline: none;
  margin: 40px 60px 20px auto;
  height: 25px;
`;
export default function ProfileDetails({ aboutMe }) {
  return (
    <Container>
      <NavBar />
      <AboutMe>
        <Headline>About Me:</Headline>
        <Description>{aboutMe}</Description>
      </AboutMe>
      <CareerHeadline>Werdegang</CareerHeadline>
      <CareerWrapper>
        <CareerDate>08.2016 - heute</CareerDate>
        <CompanyWrapper>
          <CareerCompany>neue fische GmbH, Köln</CareerCompany>
          <CareerProfession>Web Developerin</CareerProfession>
        </CompanyWrapper>
      </CareerWrapper>
      <CareerWrapper>
        <CareerDate>09.2015 - 07.2016</CareerDate>
        <CompanyWrapper>
          <CareerCompany>
            Alte Vögel GmbH & Co. KG, Mülheim an der Ruhr
            <CareerProfession>Junior Web Developerin</CareerProfession>
          </CareerCompany>
        </CompanyWrapper>
      </CareerWrapper>
      <CareerWrapper>
        <CareerDate>09.2011 - 06.2015</CareerDate>
        <CompanyWrapper>
          <CareerCompany>Ruhr Universität Bochum</CareerCompany>
          <CareerProfession>Studium der Informatik</CareerProfession>
        </CompanyWrapper>
      </CareerWrapper>
      <Contact>Kontakt aufnehmen</Contact>
    </Container>
  );
}
