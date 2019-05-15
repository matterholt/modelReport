import React from "react";
import DataFile from "./result_data/data.json";

const targets = DataFile.target.stiffness;
const base_model = DataFile.base.stiffness;
const cm_model = DataFile.cm.stiffness;

console.log(targets);

function AnalysisSummary() {
  return (
    <div>
      <h1>Performance review</h1>
    </div>
  );
}

export default AnalysisSummary;
