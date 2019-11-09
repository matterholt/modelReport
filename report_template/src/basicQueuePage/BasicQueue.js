import React from "react";
import Header from "../component/Header";
import SideNav from "../SideNavComp/SideNav";

const QueuedItem = () => {
  return (
    <div className="bg-white flex shadow rounded  my-2">
      <ul className="flex flex-row w-full justify-between px-2 py-5">
        <li> Status of model </li>
        <div>
          <li> Model Name submitted </li>
          <li> quick description of model </li>
        </div>
        <li> date:</li>
        <li> button to update</li>
      </ul>
    </div>
  );
};

export default function BaseQueue() {
  return (
    <div>
      <Header titleHeader="Basic Queue" />
      <SideNav />
      <div className="flex flex-col w-full">
        <QueuedItem />
        <QueuedItem />
        <QueuedItem />
        <QueuedItem />
      </div>
    </div>
  );
}
