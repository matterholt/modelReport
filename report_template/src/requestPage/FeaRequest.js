import React, { useState } from "react";

import Header from "../comps_common/Header";
import SideNav from "../SideNavComp/SideNav";
import ModelInfo from "./formPage/ModelInfo";
import ModelChange from "./formPage/ModelChange";
import ModelAnalysis from "./formPage/ModelAnalysis";

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
      <Header titleHeader="Fea Request" />
      <div className="flex flex-row bg-gray-500 min-h-screen  ">
        <SideNav />
        <div className="flex flex-row ">
          <ModelInfo modelIfoCollect={modelIfoCollect} />
          <ModelChange />
          <ModelAnalysis />
        </div>
      </div>
    </div>
  );
};

export default FEARequest;
