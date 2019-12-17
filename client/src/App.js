import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import dark from "./themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <h1>candydate</h1>
    </ThemeProvider>
  );
}

export default App;
