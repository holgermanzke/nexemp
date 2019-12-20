import React from "react";
import CandidateDetails from "../components/CandidateDetails";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Candidate Information",
  decorators: [withKnobs]
};

export function WithImage() {
  return (
    <CandidateDetails
      imgSrc={text(
        "Image",
        "https://images.unsplash.com/photo-1562071707-7249ab429b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      )}
      alt={text("alt", "Stock Frau")}
      alt="alt"
    />
  );
}

export function WithoutImage() {
  return (
    <CandidateDetails
      imgSrc={text(
        "Image",
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg"
      )}
      alt={text("alt", "Name")}
    />
  );
}
