/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const head_title = css`
  grid-column: 2/5;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  text-align: center;
  align-items: center;
`;
const head_analysisTitle = css`
  background: linear-gradient(#e7ecef, rgba(132, 188, 218, 1));
  box-shadow: 5px 6px 10px grey;
  padding: 1rem 3rem;
`;
const head_modelVR = css`
  background: linear-gradient(#e7ecef, rgba(132, 188, 218, 1));
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

Header.propTypes = {
  analysis: PropTypes.string.isRequired,
  verRev: PropTypes.string.isRequired
};

export default Header;
