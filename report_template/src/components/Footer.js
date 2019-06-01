/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const footer = css`
  grid-column: 2/5;
  display: flex;
  justify-content: space-between;
`;
const borderDouble = css`
  position: relative;
  border-top: 6px solid red;
  &:after {
    content: " ";
    position: absolute;
    z-index: 5;
    top: -2px;
    left: -5px;
    right: 5px;
    border-top: 6px solid #1d2d44;
  }
`;

function Footer() {
  return (
    <div css={[footer, borderDouble]}>
      <p>year.month.date</p>
      <p>R&DCompany</p>
    </div>
  );
}

export default Footer;
