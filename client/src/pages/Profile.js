import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import Separator from "../components/Separator";
import ProfileDetails from "../components/ProfileDetails";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  display: flex;
`;

export default function Profile() {
  return (
    <PageWrapper>
      <CandidateDetails />
      <Separator />
      <ProfileDetails />
    </PageWrapper>
  );
}
