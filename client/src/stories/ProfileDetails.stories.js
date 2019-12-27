import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Profile Details",
  decorators: [withKnobs]
};

export function Profile() {
  return (
    <ProfileDetails
      candAboutMe={text(
        "About Me",
        "Ich liebe die Herausforderung, die jedes neue Projekt mitbringt. Mittlerweile habe ich mich auf das Backend spezialisiert Hier nutze ich vor allem React, Nodejs und Expressjs."
      )}
      candDate1From={text("Zeitraum 1 von", "08.2016")}
      candDate1Due={text("Zeitraum 1 bis", "heute")}
      candComp1={text("Unternehmen 1", "neue fische GmbH")}
      candCity1={text("Stadt 1", "Köln")}
      candProfession1={text("Beruf 1", "Web Developerin")}
      candDate2From="09.2015"
      candate2Due="07.2016"
      candComp2="Alte Vögel GmbH & Co. KG"
      candCity2="Mülheim an der Ruhr"
      candProfession2="Junior eb Developerin"
      candDate3From="09.2011"
      candDate3Due="06.2015"
      candComp3="Ruhr Universität Bochum"
      candCity3="Bochum"
      candProfession3="Studium der Informatik"
    />
  );
}
