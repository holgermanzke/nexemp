import React from "react";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import AboutMe from "./profileDetails/AboutMe";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 0.9rem;
  font-weight: 300;
  width: 150px;
  border-radius: 15px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  outline: none;
  margin: 40px 60px 20px auto;
  height: 35px;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;
export default function ProfileDetails({
  candAboutMe,
  date1from,
  date1due,
  comp1,
  city1,
  profession1,
  date2from,
  date2due,
  comp2,
  city2,
  profession2,
  date3from,
  date3due,
  comp3,
  city3,
  profession3
}) {
  return (
    <Container>
      <NavBar />
      <AboutMe aboutMe={candAboutMe} />

      <CareerHeadline>Werdegang</CareerHeadline>
      <CareerWrapper>
        <CareerDate>
          {date1from} - {date1due}
        </CareerDate>
        <CompanyWrapper>
          <CareerCompany>
            {comp1}, {city1}
          </CareerCompany>
          <CareerProfession>{profession1}</CareerProfession>
        </CompanyWrapper>
      </CareerWrapper>
      <CareerWrapper>
        <CareerDate>
          {date2from} - {date2due}
        </CareerDate>
        <CompanyWrapper>
          <CareerCompany>
            {comp2}, {city2}
            <CareerProfession>{profession2}</CareerProfession>
          </CareerCompany>
        </CompanyWrapper>
      </CareerWrapper>
      <CareerWrapper>
        <CareerDate>
          {date3from} - {date3due}
        </CareerDate>
        <CompanyWrapper>
          <CareerCompany>
            {comp3}, {city3}
          </CareerCompany>
          <CareerProfession>{profession3}</CareerProfession>
        </CompanyWrapper>
      </CareerWrapper>
      <Contact>Kontakt aufnehmen</Contact>
    </Container>
  );
}
