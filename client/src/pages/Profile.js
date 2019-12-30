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
  const [profile, setProfile] = React.useState([]);

  async function refreshProfile() {
    const foundProfile = await getCandidateDetails(candId);
    setProfile(foundProfile);
    return profile;
  }

  React.useEffect(() => {
    refreshProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {profile.map(profile => {
        return (
          <PageWrapper key={profile.id}>
            <CandidateDetails
              candName={profile.first_name + " " + profile.last_name}
              candProfession={profile.position_or_graduation}
              candEMail={profile.mail}
              candPhone={profile.sender_phone_first}
              candStreet={profile.street + " " + profile.number}
              candCity={profile.town}
            />
            <Separator />
            <ProfileDetails />
          </PageWrapper>
        );
      })}
    </>
  );
}
