import React, { useState } from "react";
import ModelInfo from "./pages/ModelInfo";
import ModelChange from "./pages/ModelChange";
import ModelAnalysis from "./pages/ModelAnalysis";

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
    <div className="w-screen h-screen flex justify-around">
      <ModelInfo modelIfoCollect={modelIfoCollect} />
      <ModelChange />
      <ModelAnalysis />
    </div>
  );
};

export default FEARequest;
