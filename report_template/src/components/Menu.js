import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
/**
 * create a menu for all available model for review
 *
 */
const Menu = css`
  grid-row: 8;
  width: 25rem;
  border: 2px solid #6096ba;
  background: #add8e6;
`;
const ModelListMenu = ({ modelList }) => {
  const ModelList = modelList.map((item, id) => <li keys={id}>{item}</li>);
  return <ul>{ModelList} </ul>;
};

export default function MenuBar(props) {
  return (
    <nav css={Menu}>
      <ModelListMenu modelList={props.modelList} />
    </nav>
  );
}
