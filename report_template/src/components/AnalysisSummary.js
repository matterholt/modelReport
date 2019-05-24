import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
/* 
quick rundown on what happen to the most important sus point
*/

const summaryStyle = css`
  grid-column: 2;
  grid-row: 3;
`;

function ValidateResults() {
  return (
    <li>
      Uaa <span>X :</span> <span>+1 k/N</span>
    </li>
  );
}

function AnalysisSummary() {
  return (
    <ul css={summaryStyle}>
      <h3>Analysis Summary</h3>
      <ValidateResults />
    </ul>
  );
}

export default AnalysisSummary;
