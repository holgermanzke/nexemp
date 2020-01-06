import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import Separator from "../components/Separator";
import ProfileDetails from "../components/ProfileDetails";
import styled from "@emotion/styled";
import { getCandidateDetails } from "../components/getCandidateDetails";

const PageWrapper = styled.div`
  display: flex;
`;

export default function Profile(candId) {
  const [profiles, setProfiles] = React.useState([]);

  React.useEffect(() => {
    async function refreshProfile() {
      const foundProfile = await getCandidateDetails(candId);
      setProfiles(foundProfile);
    }

    refreshProfile();
  }, [candId]);

  return (
    <>
      {profiles.map(profile => {
        return (
          <PageWrapper key={profile.id}>
            <CandidateDetails
              candSrc={profile.imgSrc}
              candName={profile.firstName + " " + profile.lastName}
              candProfession={profile.profession}
              candSpecial1={profile.special1}
              candSpecial2={profile.special2}
              candEMail={profile.eMail}
              candPhone={profile.phone}
              candStreet={profile.street + " " + profile.streetNumber}
              candCity={profile.city}
            />
            <Separator />
            <ProfileDetails
              candAboutMe={profile.aboutMe}
              candDate1From={profile.fromDates[0]}
              candDate1Due={profile.dueDates[0]}
              candComp1={profile.companies[0]}
              candCity1={profile.companiesCities[0]}
              candProfession1={profile.companiesProfessions[0]}
              candDate2From={profile.fromDates[1]}
              candDate2Due={profile.dueDates[1]}
              candComp2={profile.companies[1]}
              candCity2={profile.companiesCities[1]}
              candProfession2={profile.companiesProfessions[1]}
              candDate3From={profile.fromDates[2]}
              candDate3Due={profile.dueDates[2]}
              candComp3={profile.companies[2]}
              candCity3={profile.companiesCities[2]}
              candProfession3={profile.companiesProfessions[2]}
            />
          </PageWrapper>
        );
      })}
    </>
  );
}
