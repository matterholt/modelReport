import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const mdlDescpt = css`
  grid-column: 1/5;
  grid-row: 5;
  border: 2px solid #357266;
  background: #e7ecef;
  width: 50vw;
  overflow: hidden;
  border-radius: 10px;
  margin: 1rem;
  display: grid;
`;
const mdlDescpt_title = css`
  width: 100%;
  text-align: center;
  background: linear-gradient(#a3bbad, #e7ecef);
  margin: 0;
  padding: 0;
`;
const mdlDescpt_Info = css`
  padding: 1rem;
  align-content: center;
  margin: 0;
`;
const mdlDescpt_List = css`
  line-height: 1.5rem;
`;

const ModelChanges = () => {
  const listChange = [
    "Side member have been update to fit new layout",
    "UA bracket added bead",
    "Front lower cross member shape change",
    "Up-gauge mid bracket "
  ];
  //need to fix key
  const itemList = listChange.map(item => <li key={item}>{item}</li>);
  return <ol css={mdlDescpt_List}>{itemList}</ol>;
};

function ModelDescription(props) {
  return (
    <div css={mdlDescpt}>
      <div css={mdlDescpt_title}>
        <h2>Model Description</h2>
        <p css={mdlDescpt_Info}>Update made to the New model.</p>
      </div>

      <ModelChanges />
    </div>
  );
}

export default ModelDescription;
