import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import dark from "../src/themes/dark";
import { BrowserRouter as Router } from "react-router-dom";

//add GlobalStyles to all stories
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={dark}>
    <GlobalStyles />
    <Router>{storyFn()}</Router>
  </ThemeProvider>
);

addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
