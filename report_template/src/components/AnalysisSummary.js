/** @jsx jsx */
import { css, jsx } from "@emotion/core";
/* 
quick rundown on what happen to the most important sus point
*/

const summaryStyle = css`
  grid-column: 4;
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

function ValidateResults() {
  return (
    <li>
      Uaa <span>X :</span> <span>+1 k/N</span>
    </li>
  );
}

function AnalysisSummary() {
  return (
    <div css={summaryStyle}>
      <h3>Analysis Summary</h3>
      <ul>
        <ValidateResults />
      </ul>
    </div>
  );
}

export default AnalysisSummary;
