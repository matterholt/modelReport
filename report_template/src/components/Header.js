import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const head_title = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  text-align: center;
`;
const head_analysisTitle = css`
  background: linear-gradient(#e7ecef, #6096ba);
  padding: 1rem;
  box-shadow: 5px 6px 10px grey;
`;
const head_modelVR = css`
  background: linear-gradient(#e7ecef, #f96d00);
  padding: 1rem 3rem;
  box-shadow: 5px 6px 10px grey;
`;
const borderDouble = css`
  position: relative;
  border-bottom: 6px solid red;
  &:after {
    content: " ";
    position: absolute;
    z-index: 5;
    top: 5px;
    left: -5px;
    right: 5px;
    bottom: -1px;
    border-bottom: 6px solid #1d2d44;
  }
`;

function Header(props) {
  return (
    <div css={[head_title, borderDouble]}>
      <h2 css={head_analysisTitle}>{props.analysis}</h2>
      <h1 css={head_modelVR}>{props.verRev}</h1>
      <h2>
        R&D <br /> Company
      </h2>
    </div>
  );
}

export default Header;
