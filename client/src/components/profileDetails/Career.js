import React from "react";
import styled from "@emotion/styled";

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

export default function Career({ dateFrom, dateDue, comp, city, profession }) {
  return (
    <CareerWrapper>
      <CareerDate>
        {dateFrom} - {dateDue}
      </CareerDate>
      <CompanyWrapper>
        <CareerCompany>
          {comp}, {city}
        </CareerCompany>
        <CareerProfession>{profession}</CareerProfession>
      </CompanyWrapper>
    </CareerWrapper>
  );
}
