import React from "react";
import { Link } from "react-router-dom";

const NaviLink = ({ linkName, toPath }) => {
  return (
    <Link to={toPath}>
      <li>{linkName}</li>
    </Link>
  );
};

function SideNav() {
  return (
    <div className="font-sans flex flex-col items-center justify-start ">
      <ul className="rounded bg-white shadow flex flex-col w-64 m-2 h-full">
        <NaviLink linkName="Home" toPath="/" />
        <NaviLink linkName="Login" toPath="/login" />
        <NaviLink linkName="Fea Request" toPath="/request" />
        <NaviLink linkName="Basic Queue" toPath="/baseQueue" />
        <NaviLink linkName="Working Queue" toPath="/workQueue" />
      </ul>
    </div>
  );
}

export default SideNav;
