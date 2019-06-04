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

function percentToTarget() {
  // compare to the target validate if result are above or below target
  // Red -> <100%, Green -> >100%
}

function SuspensionValues({ columnOneData, targetDis, cmDis, base }) {
  const RowAttribute = props => {
    return <td>{props.item}</td>;
  };
  // creating row by row by map in map, there is a lot of column and this might not be the best way
  // so creating a target array would just have to map it into the tr not nesting map()
  // need to think about its
  const itemInRow = columnOneData.map((load, index) =>
    load.map((x, idTwo) => (
      <tr key={index + idTwo}>
        <RowAttribute item={x[0]} />
        <td>{x[1]}</td>
      </tr>
    ))
  );

  //const rowItems = itemInRow.map((x, index) => <li key={index}>{x}</li>);
  return <>{itemInRow}</>;
}

function TestingTable({ rowHeading, targetDis, cmDis, baseDis }) {
  return (
    <table css={tableStyle}>
      <tbody>
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

        <SuspensionValues
          columnOneData={rowHeading}
          targetDis={targetDis}
          cmDis={cmDis}
          base={baseDis}
        />
      </tbody>
    </table>
  );
}

export default TestingTable;
