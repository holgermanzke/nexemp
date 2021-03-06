import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "Candidate Information",
  decorators: [withKnobs]
};

export function WithImage() {
  return (
    <CandidateDetails
      candSrc={text(
        "Image",
        "https://images.unsplash.com/photo-1562071707-7249ab429b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      )}
      alt={text("alt", "Stocks Frau")}
      candName={text("Name", "Hannelore Fischer")}
      candProfession={text("Beruf", "Grafik Designerin")}
      candExperience={number("Berufserfahrung", 4)}
      candSpecial1={text("Special1", "React")}
      candSpecial2={text("Special2", "Projektmanagement")}
      candEMail={text("E-Mail", "mailme@neuefische.de")}
      candPhone={text("Phone", "+49 178 6767678")}
      candStreet={text("Straße", "Breite Str. 23")}
      candCity={text("Stadt", "41245 Köln")}
    />
  );
}

export function WithoutImage() {
  return (
    <CandidateDetails
      imgSrc={text("Image", "")}
      alt={text("alt", "Name")}
      name={text("Name", "Hannelore Fischer")}
      profession={text("Beruf", "Grafik Designerin")}
      experience={number("Berufserfahrung", 4)}
      special1={text("Special1", "React")}
      special2={text("Special2", "Projektmanagement")}
      email={text("E-Mail", "mailme@neuefische.de")}
      phone={text("Phone", "+49 178 6767678")}
      street={text("Straße", "Breite Str. 23")}
      city={text("Stadt", "41245 Köln")}
    />
  );
}
