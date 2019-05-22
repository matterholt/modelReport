import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// componenet list
// target column
// base column
// current/ cm column
const table = css`
  display: grid;
  background: lightgrey;
  grid-template-columns: repeat(7, 1fr);
`;
function ResultTable() {
  return (
    <div css={table}>
      <h3>LOC.</h3>
      <h3>Dir</h3>
      <h3>Target</h3>
      <h3>Base kN/mm</h3>
      <h3>Base %Target</h3>
      <h3>V02R00 kN/mm</h3>
      <h3>V02R00 %Target</h3>
    </div>
  );
}

export default ResultTable;
