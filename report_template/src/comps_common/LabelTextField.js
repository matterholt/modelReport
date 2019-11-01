import React from "react";

const LabelTextField = ({
  labelTitle,
  labelName,
  paceHolder,
  labelValue,
  updateValue
}) => {
  // label Input for all form, place in a top level for all component to uses
  return (
    <label className="flex flex-col m-4 text-md text-blue-800 font-semibold">
      {labelTitle}
      <textarea
        value={labelValue}
        onChange={e => updateValue(e.target.value)}
        placeholder={paceHolder}
        className="shadow my-2 p-2"
      />
    </label>
  );
};

export default LabelTextField;
