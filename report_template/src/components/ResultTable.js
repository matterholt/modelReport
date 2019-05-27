import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
/*
Table with the full stiffness comparison to base and target


*/
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

/// build components based on rows.
function findRowData() {
  // filter through json to find the row data for target,base, and cm
}

function percentToTarget() {
  // compare to the target validate if result are above or below target
  // Red -> <100%, Green -> >100%
}

function SuspensionValues(params) {
  // If we pass an object into component based on the json file.
  // json would be based on rows, So Sus. point and direction of load
  return (
    <tr>
      <td>UAA</td>
      <td>X</td>
      <td>12 </td>
      <td>21</td>
      <td>180%</td>
      <td>24</td>
      <td> 188% </td>
    </tr>
  );
}

function ResultTable() {
  return (
    <table css={tableStyle}>
      <tr>
        <th colspan="3">Base model</th>
        <th colspan="2">N/A</th>
        <th colspan="2">v00r00</th>
      </tr>
      <tr>
        <td colspan="3">model Description</td>
        <td colspan="2"> Improved shape of side member</td>
        <td colspan="2">Increased welding ton bracket lower</td>
      </tr>
      <tr>
        <th>Subframe model</th>
        <th> </th>
        <th> target </th>
        <th> base </th>
        <th> % target </th>
        <th> name </th>
        <th> % target </th>
      </tr>
      <tr>
        <td>Loc.</td>
        <td>Dir.</td>
        <td>kN/mm </td>
        <td>kN/mm </td>
        <td />
        <td>kN/mm </td>
        <td> </td>
      </tr>
      <SuspensionValues />
    </table>
  );
}

export default ResultTable;
