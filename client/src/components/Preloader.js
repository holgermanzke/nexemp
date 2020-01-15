import React from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Path = styled.path`
  transform: scale(0.37);
  transform-origin: 50px 50px;
`;

export default function Preloader() {
  return (
    <Div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="407px"
        height="407px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <Path
          fill="none"
          stroke="#67ae9a"
          strokeWidth="8"
          strokeDasharray="42.76482137044271 42.76482137044271"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          strokeLinecap="round"
          // style="transform:scale(0.37); transform-origin:50px 50px"}
        >
          <animate
            attributeName="stroke-dashoffset"
            repeatCount="indefinite"
            dur="1.25s"
            keyTimes="0;1"
            values="0;256.58892822265625"
          ></animate>
        </Path>
      </svg>
    </Div>
  );
}
