import React, { useState, useEffect } from "react";

import Header from "../component/Header";

import TitleForm from "../component/TitleForm";
import LabelInput from "../component/LabelInput";
import LabelTextField from "../component/LabelTextField";
import SideNav from "../component/SideNav";
import ImageInput from "../component/ImageInput";

import ModelChange from "./ModelChange";

/////////////////////////////////////////////////////////////////////

const AddChangeList = () => {
  const [toggle, updateToggle] = useState(false);

  if (toggle === false) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2
        px-4 rounded "
        onClick={() => {
          updateToggle(true);
        }}
      >
        {" "}
        Add Changes{" "}
      </button>
    );
  } else {
    return (
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2
          px-4 rounded "
          onClick={() => {
            updateToggle(false);
          }}
        >
          {" "}
          accept{" "}
        </button>
        <ModelChange />
      </div>
    );
  }
};

export default function FeaRequest() {
  const [requestData, updateRequestDate] = useState({
    baseModelName: "",
    requestModelName: "",
    requestModelPurpose: "",
    requestModelChanges: ["rear beam update", "upgauge sidember"],
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
      <div className="flex flex-col bg-gray-200 w-full min-h-screen">
        <Header titleHeader="Fea Request" />
        <div className="flex flex-row">
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
        </div>
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

        <AddChangeList />
        <textarea
          name="changes"
          readOnly
          disabled
          value={requestData.requestModelChanges}
          className="shadow m-2 p-2 bg-white"
        />
      </div>
    </div>
  );
}
