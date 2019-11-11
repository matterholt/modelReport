import React, { useState } from "react";
import LabelFor from "./LabelFor";

const LabelInput = ({ labelTitle, labelName, labelValue, updateValue }) => {
  // label Input for all form, place in a top level for all component to uses
  return (
    <fieldset className="flex flex-col">
      <LabelFor labelFor={labelName} labelTitle={labelTitle} />
      <input
        name={labelName}
        value={labelValue}
        onChange={updateValue}
        className="shadow m-2 p-2 bg-white"
      />
    </fieldset>
  );
};

export default LabelInput;
