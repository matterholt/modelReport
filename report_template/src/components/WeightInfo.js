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

const WeightCal = (props) => {
  let [target,base,cm] = props.weightData
  let howCloseToTarget = cm - target

  return (
    <ul>
      <li>Target Weight: {target} kg.</li>
      <li>Current Weight: {cm} kg.</li>
      <li style={{color:"green"}}>Weight Target: {howCloseToTarget.toFixed(2)} kg.</li>
    </ul>
  );
  };

// pass the weight data from json
export default function WeightInfo(props) {
  const  weightValues = props.data
  return (
    <div css={weightStyle}>
      <h3>Weight Status (kg)</h3>
      <WeightCal weightData = {weightValues}
      />
    </div>
  );
}
