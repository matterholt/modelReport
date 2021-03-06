import React from "react";
import Header from "./component/Header";
import SideNav from "./component/SideNav";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-500 h-screen">
      <Header titleHeader="Home" />
      <SideNav />
    </div>
  );
};

export default Home;
