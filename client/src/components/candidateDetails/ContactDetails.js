import React from "react";
import styled from "@emotion/styled";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
const Mailadress = styled.p`
  margin: 15px 25px 0 15px;
  font-size: 0.8rem;
  font-weight: 200;
`;

const PhoneNumber = styled.p`
  margin: 0 0 0 15px;
  font-size: 0.8rem;
  font-weight: 200;
`;
const AdressDetails = styled.p`
  margin: 0 0 0 15px;
  font-size: 0.8rem;
  font-weight: 200;
`;

export default function ContactDetails({ email, phone, street, city }) {
  return (
    <>
      <FlexWrapper>
        <MailIcon />
        <Mailadress>{email}</Mailadress>
      </FlexWrapper>
      <FlexWrapper>
        <PhoneIcon />
        <PhoneNumber>{phone}</PhoneNumber>
      </FlexWrapper>
      <FlexWrapper>
        <LocationIcon />
        <AdressDetails>
          {street}
          <br />
          {city}
        </AdressDetails>
      </FlexWrapper>
    </>
  );
}
