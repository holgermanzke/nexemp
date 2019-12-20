import React from "react";
import NavBar from "../components/NavBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "NavBar"
};

export function Navigation() {
  return <NavBar onClick={action("clicked")} />;
}
