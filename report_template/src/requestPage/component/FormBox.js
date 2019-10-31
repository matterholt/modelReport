import React, { useState, useEffect } from "react";
import TitleForm from "./TitleForm";
import LabelInput from "./LabelInput";
import LabelTextField from "./LabelTextField";
import StepButton from "./StepButton";

const FormBox = ({ getData }) => {
  const [baseModel, setBaseModel] = useState({ base_Name: "" });
  const [cmModelName, setCmModelName] = useState("");
  const [reasonModel, setReasonModel] = useState("");

  useEffect(() => {
    console.log(baseModel);
  }, [baseModel]);

  function update_Value(e) {
    // how to update the object with set up below patge
    setBaseModel({ [e.target.name]: e.target.value });
  }
  return (
    <form className="max-full w-xl bg-white flex flex-col rounded">
      <TitleForm formTitle="Model Info" />
      <LabelInput
        labelName="base_Name"
        labelTitle="Base Model Name"
        labelValue={baseModel.base_Name}
        updateValue={update_Value}
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
        <StepButton compileModelInfo={getData} />
        <StepButton compileModelInfo={getData} />
      </div>
    </form>
  );
};

export default FormBox;
