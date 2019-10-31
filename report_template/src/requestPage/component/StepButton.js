import React from "react";

const StepButton = ({ compileModelInfo }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded "
      onClick={compileModelInfo}
    >
      confirm continue{" "}
    </button>
  );
};

export default StepButton;
