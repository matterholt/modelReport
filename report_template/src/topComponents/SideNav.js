import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const NaviLink = ({ linkName, toPath }) => {
  return (
    <Link to={toPath}>
      <li>{linkName}</li>
    </Link>
  );
};

function SideNav() {
  return (
    <div className="font-sans bg-gray-100 flex flex-col items-center justify-start">
      <Header titleHeader="FEA Request Tracker" />
      <ul className="rounded bg-white shadow flex flex-col w-64 m-2">
        <NaviLink linkName="Login" toPath="/" />
        <NaviLink linkName="Fea Request" toPath="/request" />
        <NaviLink linkName="Basic Queue" toPath="/baseQueue" />
        <NaviLink linkName="Working Queue" toPath="/workQueue" />
      </ul>
    </div>
  );
}

export default SideNav;
