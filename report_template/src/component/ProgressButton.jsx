import React from "react";
import StepButton from "../component/StepButton";

export default function ProgressButton({ stage, updateStage }) {
  return (
    <div>
      <StepButton
        compileModelInfo={() => updateStage(stage - 1)}
        stepProcess="BACK"
      />
      <StepButton
        compileModelInfo={() => updateStage(stage + 1)}
        stepProcess="NEXT"
      />
    </div>
  );
}
