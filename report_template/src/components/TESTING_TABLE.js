import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
/*
Table with the full stiffness comparison to base and target


*/
const tableStyle = css`
  grid-column: 2/5;
  grid-row: 10;
  place-self: center stretch;
  box-shadow: 5px 6px 10px grey;
  background: lightblue;

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

function SuspensionValues({ loadDir, loadPoint }) {
  // creating row by row by map in map, there is a lot of column and this might not be the best way
  // so creating a target array would just have to map it into the tr not nesting map()
  // need to think about its
  const itemInRow = loadPoint.map(load =>
    loadDir.map((dir, index) => (
      <tr>
        <td>{load}</td>
        <td>{dir}</td>
      </tr>
    ))
  );

  //const rowItems = itemInRow.map((x, index) => <li key={index}>{x}</li>);
  return <>{itemInRow}</>;
}

function TestingTable({ loadDir, loadPoint }) {
  return (
    <table css={tableStyle}>
      <tbody>
        <tr>
          <th>Load Point</th>
          <th>Dir.</th>
        </tr>

        <SuspensionValues loadDir={loadDir} loadPoint={loadPoint} />
      </tbody>
    </table>
  );
}

export default TestingTable;
