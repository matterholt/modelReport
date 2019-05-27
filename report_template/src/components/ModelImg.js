import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const modelImage = css`
  grid-column: 4;
  grid-row: 3;
`;

export default function ModelImg() {
  return (
    <a css={modelImage} href="https://placeholder.com">
      <img src="https://via.placeholder.com/300" />
    </a>
  );
}
