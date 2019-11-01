import React, { useState, useEffect } from "react";
import TitleForm from "./TitleForm";
import LabelInput from "./LabelInput";
import LabelTextField from "./LabelTextField";
import StepButton from "./StepButton";

const FormBox = () => {
  const [baseModel, setBaseModel] = useState("");
  const [cmModelName, setCmModelName] = useState("");
  const [reasonModel, setReasonModel] = useState("");

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
    <form className="max-full w-xl bg-white flex flex-col rounded">
      <TitleForm formTitle="Model Info" />
      <LabelInput
        labelName="base_Name"
        labelTitle="Base Model Name"
        labelValue={baseModel.base_Name}
        updateValue={setBaseModel}
      />

      <LabelInput
        labelTitle="CM Model Name"
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
    </form>
  );
};

export default FormBox;
