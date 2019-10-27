import React, { useState } from "react";
import ModelInfo from "./request/ModelInfo";
import ModelChange from "./request/ModelChange";
import ModelAnalysis from "./request/ModelAnalysis";

function ButtonProcess() {
  return (
    <div className="flex">
      <button className="w-6/12 border p-4 bg-blue-500 text-white ">
        {" "}
        Back{" "}
      </button>
      <button className="w-6/12 border p-4 bg-blue-700 text-white ">
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

function Request() {
  const [pgNum, setPgNum] = useState(1);
  /*
  if (pgNum === 1) {
    return <ModelInfo />;
  } else if (pgNum === 2) {
    return <ModelChange />;
  }
  */
  return <div className="flex w-screen justify-around"></div>;
}

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
      <button
        onClick={() => {
          console.log(modelInfo);
        }}
      >
        {" "}
        console
      </button>
    </div>
  );
};

export default FEARequest;
