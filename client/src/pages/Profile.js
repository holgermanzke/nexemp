import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import Separator from "../components/Separator";
import ProfileDetails from "../components/ProfileDetails";
import styled from "@emotion/styled";
import { getCandidateDetails } from "../components/api/getCandidateDetails";
import { useParams } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
`;

function convertDate(date) {
  if (date !== null) {
    const splittedDate = date.split("-");

    const convertedDate = splittedDate[1] + "." + splittedDate[0];

    return convertedDate;
  } else {
    const convertedDate = "";
    return convertedDate;
  }
}

function createdDate(date) {
  const formattedDate = new Date(date);
  if (formattedDate.getMonth() < 9) {
    const compareDate =
      "0" + (formattedDate.getMonth() + 1) + "." + formattedDate.getFullYear();
    return compareDate;
  } else {
    const compareDate =
      formattedDate.getMonth() + 1 + "." + formattedDate.getFullYear();
    return compareDate;
  }
}

export default function Profile() {
  const [profiles, setProfiles] = React.useState([]);
  let { id } = useParams();

  React.useEffect(() => {
    async function refreshProfile() {
      const foundProfile = await getCandidateDetails(id);
      setProfiles(foundProfile);
    }

    refreshProfile();
  }, [id]);
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
              candDate1From={convertDate(profile.fromDates[0])}
              candDate1Due={
                createdDate(profile.createDate) ===
                convertDate(profile.dueDates[0])
                  ? "heute"
                  : convertDate(profile.dueDates[0])
              }
              candComp1={profile.companies[0]}
              candCity1={profile.companiesCities[0]}
              candProfession1={profile.companiesProfessions[0]}
              candDate2From={convertDate(profile.fromDates[1])}
              candDate2Due={
                createdDate(profile.createDate) ===
                convertDate(profile.dueDates[1])
                  ? "heute"
                  : convertDate(profile.dueDates[1])
              }
              candComp2={profile.companies[1]}
              candCity2={profile.companiesCities[1]}
              candProfession2={profile.companiesProfessions[1]}
              candDate3From={convertDate(profile.fromDates[2])}
              candDate3Due={
                createdDate(profile.createDate) ===
                convertDate(profile.dueDates[2])
                  ? "heute"
                  : convertDate(profile.dueDates[2])
              }
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
