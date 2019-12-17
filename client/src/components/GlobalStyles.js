import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0px;
          height: 100vh;
          width: 100vw;
          font-family: "Source Sans Pro", sans-serif;
          font-size: 16px;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
}
export default GlobalStyles;
