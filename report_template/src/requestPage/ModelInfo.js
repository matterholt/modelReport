import React, { useState, useEffect } from "react";
import TitleForm from "../comps_common/TitleForm";
import LabelInput from "../comps_common/LabelInput";
import LabelTextField from "../comps_common/LabelTextField";
import StepButton from "../comps_common/StepButton";

const ModelInfo = () => {
  const [baseModel, setBaseModel] = useState("");
  const [cmModelName, setCmModelName] = useState("");
  const [reasonModel, setReasonModel] = useState("");
  // change to object like the code pen
  function getDataTest(e) {
    e.preventDefault();
    let item = {
      baseName: baseModel,
      cmName: cmModelName,
      purpose: reasonModel
    };
    console.log(item);
  }
  return (
    <div className="max-full w-xl bg-white flex flex-col rounded">
      <TitleForm formTitle="Model Info" />
      <LabelInput
        labelName="base_Name"
        labelTitle="Base Model Name"
        labelValue={baseModel.base_Name}
        updateValue={setBaseModel}
      />

      <LabelInput
        labelTitle="CM Model Name"
        labelName="cm_Name"
        labelValue={cmModelName}
        updateValue={setCmModelName}
      />
      <LabelTextField
        labelTitle="Purpose"
        labelValue={reasonModel}
        updateValue={setReasonModel}
        paceHolder="Reason for Request"
      />
      <div>
        <StepButton stepProcess="Back" compileModelInfo={getDataTest} />
        <StepButton stepProcess="Next" compileModelInfo={getDataTest} />
      </div>
    </div>
  );
};

export default ModelInfo;
