import React, { useState, useEffect } from "react";

import Header from "../component/Header";

import TitleForm from "../component/TitleForm";
import LabelInput from "../component/LabelInput";
import LabelTextField from "../component/LabelTextField";
import SideNav from "../component/SideNav";
import ImageInput from "../component/ImageInput";

/////////////////////////////////////////////////////////////////////
export default function FeaRequest() {
  const [requestData, updateRequestDate] = useState({
    baseModelName: "",
    requestModelName: "",
    requestModelPurpose: "",
    requestModelChanges: "",
    requestModelImage: "",
    requestModelAnalysis: [""],
    requestModelFileLoc: ""
  });

  useEffect(() => console.log(requestData));

  function compileFormInputs(e) {
    updateRequestDate({
      ...requestData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="flex flex-row min-h-screen">
      <SideNav />
      <div className="flex flex-col bg-gray-200 w-full">
        <Header titleHeader="Fea Request" />
        <LabelInput
          labelName="baseModelName"
          labelTitle="Base Model Name"
          labelValue={requestData.baseModelName}
          updateValue={compileFormInputs}
        />

        <LabelInput
          labelTitle="CM Model Name"
          labelName="requestModelName"
          labelValue={requestData.requestModelName}
          updateValue={compileFormInputs}
        />
        <LabelTextField
          labelTitle="Purpose"
          labelName="requestModelPurpose"
          labelValue={requestData.requestModelPurpose}
          updateValue={compileFormInputs}
        />

        <LabelInput
          labelTitle="File Location"
          labelName="requestModelFileLoc"
          labelValue={requestData.requestModelFileLoc}
          updateValue={compileFormInputs}
        />

        <ImageInput
          labelTitle="Up load image"
          labelName="requestModelImage"
          labelValue={requestData.requestModelImage}
          updateValue={compileFormInputs}
        />
      </div>
    </div>
  );
}
