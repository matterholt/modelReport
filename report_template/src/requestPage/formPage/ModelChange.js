import React, { useState, useEffect } from "react";
import TitleForm from "../../comps_common/TitleForm";
import LabelInput from "../../comps_common/LabelInput";
import StepButton from "../../comps_common/StepButton";

const ChangeList = () => {
  return <p> add changes to the model </p>;
};

function ModelChange() {
  const [formValues, updateFormValues] = useState({
    cmModelImagePath: "",
    modelChanges: ""
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
      <TitleForm formTitle="Model Changes" />
      <LabelInput
        labelName="cmModelImagePath"
        labelTitle="Up load image"
        labelValue={formValues.cmModelImagePath}
        updateValue={updateValues}
      />
      <di>
        <p>click to add changed items</p>
        <ChangeList />
      </di>
      <StepButton stepProcess="Next" compileModelInfo={updateValues} />
    </div>
  );
}
export default ModelChange;
