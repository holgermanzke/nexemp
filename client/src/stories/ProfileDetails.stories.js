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
      aboutMe={text(
        "About Me",
        "Ich liebe die Herausforderung, die jedes neue Projekt mitbringt. Mittlerweile habe ich mich auf das Backend spezialisiert Hier nutze ich vor allem React, Nodejs und Expressjs."
      )}
    />
  );
}
