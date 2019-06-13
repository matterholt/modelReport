import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const tableStyle = css`
  grid-column: 2/5;
  grid-row: 2;
  place-self: center stretch;
  box-shadow: 5px 6px 10px grey;

  td {
    border: 1px solid black;
    padding: 0.25rem;
  }
  th {
    border: 1px solid black;
    background: #6096ba;
    padding: 0.5rem;
  }
`;
function ResultTable() {
  return (
    <table css={tableStyle}>
      <tbody>
        <tr>
          <th colSpan="3">Base model</th>
          <th colSpan="2">N/A</th>
          <th colSpan="2">v00r00</th>
        </tr>
        <tr>
          <td colSpan="3">model Description</td>
          <td colSpan="2"> Improved shape of side member</td>
          <td colSpan="2">Increased welding ton bracket lower</td>
        </tr>
      </tbody>
    </table>
  );
}
export default ResultTable;
