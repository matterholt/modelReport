/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const modelImage = css`
  grid-column: 3;
  grid-row: 3;
  justify-self: center;
`;

export default function ModelImg() {
  return <img css={modelImage} src="https://via.placeholder.com/300" />;
}
