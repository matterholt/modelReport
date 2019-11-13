import React, { useState, useEffect } from "react";
import TitleForm from "../../comps_common/TitleForm";
import LabelInput from "../../comps_common/LabelInput";
import LabelTextField from "../../comps_common/LabelTextField";
import StepButton from "../../comps_common/StepButton";

const ModelInfo = () => {
  const [formValues, updateFormValues] = useState({
    baseModelVerion: "",
    reqeustVersion: "",
    modelPurpose: ""
  });

  function updateValues(e) {
    e.preventDefault();
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="m-2 bg-white flex flex-col rounded">
      <TitleForm formTitle="Model Info" />
      <LabelInput
        labelName="baseName"
        labelTitle="Base Model Name"
        labelValue={formValues.baseModelVerion}
        updateValue={updateValues}
      />

      <LabelInput
        labelTitle="CM Model Name"
        labelName="cm_Name"
        labelValue={formValues.reqeustVersion}
        updateValue={updateValues}
      />
      <LabelTextField
        labelTitle="Purpose"
        labelName="modelPurpose"
        labelValue={formValues.modelPurpose}
        updateValue={updateValues}
      />
      <div>
        <StepButton
          stepProcess="Back"
          compileModelInfo={console.log(formValues)}
        />
        <StepButton stepProcess="Next" compileModelInfo={updateValues} />
      </div>
    </div>
  );
};

export default ModelInfo;
