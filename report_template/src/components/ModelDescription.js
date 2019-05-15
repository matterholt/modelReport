import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ModelChanges = () => {
  const listChange = [
    "Side member have been update to fit new layout",
    "UA bracket added bead",
    "Front lower cross member shape change",
    "Upgauge mid bracket "
  ];
  //need to fix key
  const itemList = listChange.map(item => <li key={item}>{item}</li>);
  return <ol>{itemList}</ol>;
};

function ModelDescription(props) {
  return (
    <div>
      <h2>Model Description</h2>
      <p>Run down of what are the major changes made to the model.</p>
      <ModelChanges />
    </div>
  );
}

export default ModelDescription;
