import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.verRev}</h1>
      <h2>{props.analysis}</h2>
      <h2>R&D company</h2>
    </div>
  );
}

export default Header;
