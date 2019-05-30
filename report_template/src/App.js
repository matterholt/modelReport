import React from "react";
////   Style
import "./App.css";

////   Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultTable from "./components/ResultTable";
import WeightInfo from "./components/WeightInfo";
import AnalysisSummary from "./components/AnalysisSummary";
import ModelImg from "./components/ModelImg";
// logic functions
import { dataValidation } from "./logicFunc/validationModel";

// data json for results __ use this as MOCK data
import DataFile from "./resultData/data.json";

const CheckValue = () => {
  const findThisNow = DataFile[DataFile.length - 1].modelNum;
  return (
    <div style={divStyle}>
      <h1>Model Name</h1>
      <p> {findThisNow}</p>
      {DataFile.map((data, index) => {
        return <li key={index}> {data.modelNum}</li>;
      })}
    </div>
  );
};

// Model to be Validation
const cmValidation = "V01R00"; // dropdown or input
const analysisType = "Stiffness";

// list to find all model that are in json, use as a dropdown for the future
const listOfModels = DataFile.map(data => data.modelNum);

//Issue is when the array is longer than 3, will need to how to use the reference to the cm model how can take.
// Have to get the index of the matching current model name
const weightArray = DataFile.map(data => data.info.weightKg);

// array of the CM model that is model to be reported on [target, cm_model, base]
const validationModel = dataValidation(cmValidation, DataFile);

////////////////////////////////////////////////////////////
const divStyle = {
  color: "blue",
  gridRow: 9,
  background: "#f1f175",
  width: "100vw",
  height: "50vh"
};

function App() {
  return (
    <div className="App">
      <Header verRev={cmValidation} analysis={analysisType} />
      <ResultTable />
      <WeightInfo data={weightArray} />
      <AnalysisSummary />
      <ModelImg />
      <Footer />
      <CheckValue />
    </div>
  );
}

export default App;
