import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const weightStyle = css`
  grid-column: 2;
  grid-row: 3;
  border: 1px solid black;
  box-shadow: 5px 6px 10px grey;
  padding: 1rem 2rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    line-height: 2rem;
  }
`;
const WeightCal = () => {
  return (
    <ul>
      <li>Target Weight 20kg.</li>
      <li>Current Weight 25kg.</li>
      <li>Weight Target +5kg</li>
    </ul>
  );
};

// pass the weight data from json
export default function WeightInfo() {
  return (
    <div css={weightStyle}>
      <h3>Weight Status (kg)</h3>
      <WeightCal />
    </div>
  );
}
