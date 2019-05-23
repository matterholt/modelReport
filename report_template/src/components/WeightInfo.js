import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// pass the weight data from json
export default function WeightInfo() {
  return (
    <ul>
      <li>Target Weight 20kg.</li>
      <li>Current Weight 25kg.</li>
      <li>Weight Target +5kg</li>
    </ul>
  );
}
