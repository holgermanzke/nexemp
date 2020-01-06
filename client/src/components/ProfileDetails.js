import React from "react";
import styled from "@emotion/styled";
import AboutMe from "./profileDetails/AboutMe";
import Career from "./profileDetails/Career";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CareerHeadline = styled.h2`
  font-size: 1.4rem;
  margin: 35px 0 0 30px;
`;

export default function ProfileDetails({
  candAboutMe,
  candDate1From,
  candDate1Due,
  candComp1,
  candCity1,
  candProfession1,
  candDate2From,
  candDate2Due,
  candComp2,
  candCity2,
  candProfession2,
  candDate3From,
  candDate3Due,
  candComp3,
  candCity3,
  candProfession3
}) {
  return (
    <Container>
      {candAboutMe && <AboutMe aboutMe={candAboutMe} />}

      <CareerHeadline>Werdegang</CareerHeadline>
      <Career
        dateFrom={candDate1From}
        dateDue={candDate1Due}
        comp={candComp1}
        city={candCity1}
        profession={candProfession1}
      />
      <Career
        dateFrom={candDate2From}
        dateDue={candDate2Due}
        comp={candComp2}
        city={candCity2}
        profession={candProfession2}
      />
      <Career
        dateFrom={candDate3From}
        dateDue={candDate3Due}
        comp={candComp3}
        city={candCity3}
        profession={candProfession3}
      />
      <Button>Kontakt aufnehmen</Button>
    </Container>
  );
}
