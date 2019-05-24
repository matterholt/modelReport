import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const weightStyle = css`
  grid-column: 1;
  grid-row: 3;
  border: 1px solid black;
  box-shadow: 1px 2px 2px black;
  margin: 1rem;
  padding: 1rem;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    line-height: 1.5rem;
  }
`;
// pass the weight data from json
export default function WeightInfo() {
  return (
    <div css={weightStyle}>
      <h3>Weight Status (kg)</h3>
      <ul>
        <li>Target Weight 20kg.</li>
        <li>Current Weight 25kg.</li>
        <li>Weight Target +5kg</li>
      </ul>
    </div>
  );
}
