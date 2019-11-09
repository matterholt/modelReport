import React, { useState } from "react";

import Header from "../component/Header";

import ModelInfo from "./ModelInfo";
import ModelChange from "./ModelChange";
import ModelImage from "./ModelImage";
import ModelAnalysis from "./ModelAnalysis";

// since it is progressive may need to add redux, but useContext could work as well.

export default function FeaRequest() {
  const [requestData, updateRequestDate] = useState({
    baseModelName: "",
    requestModelName: "",
    requestModelPurpose: "",
    requestModelChanges: "",
    requestModelImage: "",
    requesModelAnalysis: [""],
    requestModelFileLoc: ""
  });

  function compileFormInputs(e) {
    e.preventDefault();
    updateRequestDate({
      ...requestData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header titleHeader="Fea Request" />
      <ModelInfo />
      <ModelImage />
      <ModelChange />
      <ModelAnalysis />
    </div>
  );
}
