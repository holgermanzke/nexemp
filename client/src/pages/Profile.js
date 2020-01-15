import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import Separator from "../components/Separator";
import ProfileDetails from "../components/ProfileDetails";
import styled from "@emotion/styled";
import { getCandidateDetails } from "../api/getCandidateDetails";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const PageWrapper = styled.div`
  display: flex;
`;

function convertDate(date) {
  if (date === "heute") {
    return "heute";
  }
  if (date !== null && date !== undefined) {
    let formDate = date.replace(/\./g, "-");
    formDate = formDate.replace("/", "-");
    const splittedDate = formDate.split("-");
    if (splittedDate.length < 2) return splittedDate;
    else if (splittedDate.length < 3) return splittedDate[0] + "." + splittedDate[1];
    else if (splittedDate[2].length > 2) return splittedDate[1] + "." + splittedDate[2];
    else return splittedDate[1] + "." + splittedDate[0];
  }
  return "";
}

function createdDate(date) {
  const formattedDate = new Date(date);
  if (formattedDate.getMonth() < 9) {
    const compareDate = "0" + (formattedDate.getMonth() + 1) + "." + formattedDate.getFullYear();
    return compareDate;
  } else {
    const compareDate = formattedDate.getMonth() + 1 + "." + formattedDate.getFullYear();
    return compareDate;
  }
}

export default function Profile() {
  const [profile, setProfile] = React.useState([]);
  let { id } = useParams();

  React.useEffect(() => {
    async function refreshProfile() {
      const foundProfile = await getCandidateDetails(id);
      setProfile(foundProfile);
    }

    refreshProfile();
  }, [id]);

  return (
    <>
      {profile.map(profile => {
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
            <div>
              <ProfileDetails
                candAboutMe={profile.aboutMe}
                candDate1From={convertDate(profile.fromDates[0])}
                candDate1Due={
                  createdDate(profile.createDate) === convertDate(profile.dueDates[0])
                    ? "heute"
                    : convertDate(profile.dueDates[0])
                }
                candComp1={profile.companies[0]}
                candCity1={profile.companiesCities[0]}
                candProfession1={profile.companiesProfessions[0]}
                candDate2From={convertDate(profile.fromDates[1])}
                candDate2Due={
                  createdDate(profile.createDate) === convertDate(profile.dueDates[1])
                    ? "heute"
                    : convertDate(profile.dueDates[1])
                }
                candComp2={profile.companies[1]}
                candCity2={profile.companiesCities[1]}
                candProfession2={profile.companiesProfessions[1]}
                candDate3From={convertDate(profile.fromDates[2])}
                candDate3Due={
                  createdDate(profile.createDate) === convertDate(profile.dueDates[2])
                    ? "heute"
                    : convertDate(profile.dueDates[2])
                }
                candComp3={profile.companies[2]}
                candCity3={profile.companiesCities[2]}
                candProfession3={profile.companiesProfessions[2]}
              />
              <Button to="/message">Kontakt aufnehmen</Button>
            </div>
          </PageWrapper>
        );
      })}
    </>
  );
}
