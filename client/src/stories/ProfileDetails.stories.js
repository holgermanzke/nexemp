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
      date1from={text("Zeitraum 1 von", "08.2016")}
      date1due={text("Zeitraum 1 bis", "heute")}
      comp1={text("Unternehmen 1", "neue fische GmbH")}
      city1={text("Stadt 1", "Köln")}
      profession1={text("Beruf 1", "Web Developerin")}
      date2from="09.2015"
      date2due="07.2016"
      comp2="Alte Vögel GmbH & Co. KG"
      city2="Mülheim an der Ruhr"
      profession2="Junior eb Developerin"
      date3from="09.2011"
      date3due="06.2015"
      comp3="Ruhr Universität Bochum"
      city3="Bochum"
      profession3="Studium der Informatik"
    />
  );
}
