import React, { useState } from "react";

import Header from "../comps_common/Header";
import SideNav from "../SideNavComp/SideNav";
import ModelInfo from "./ModelInfo";
import ModelChange from "./ModelChange";
import ModelAnalysis from "./ModelAnalysis";

const FEARequest = () => {
  const [modelInfo, setModelInfo] = useState({
    baseName: "",
    cmVersion: "",
    cmPurpose: ""
  });

  const modelIfoCollect = (base, cm, reason) => {
    setModelInfo({
      baseName: base,
      cmVersion: cm,
      cmPurpose: reason
    });
  };

  return (
    <div>
      <Header titleHeader="Fea Login" />
      <SideNav />
      <div className="w-screen h-screen flex justify-around">
        <ModelInfo modelIfoCollect={modelIfoCollect} />
        <ModelChange />
        <ModelAnalysis />
      </div>
    </div>
  );
};

export default FEARequest;
