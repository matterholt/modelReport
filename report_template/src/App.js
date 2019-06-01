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
import TestingTable from "./components/TESTING_TABLE";
import ModelDescription from "./components/ModelDescription";
// logic functions ////////////////////////////////////////////////
import { dataValidation } from "./logicFunc/validationModel";

// data json for results __ use this as MOCK data
import DataFile from "./resultData/data.json";

// Model to be Validation
const cmValidation = "V01R00"; // dropdown or input
const analysisType = "Stiffness";

// [target, cm_model, base]
const validationModel = dataValidation(cmValidation, DataFile);

// list to find all model that are in json, use as a dropdown for the future
const listOfModels = DataFile.map(data => data.modelNum);

// Have to get the index of the matching current model name
const weightArray = DataFile.map(data => data.info.weightKg);

function loadPointLocation(data, index) {
  // an array of name where the loads are being applied.
  const pointLoadApplied = data[index].results.stiffness;
  const loadPointsKeys = Object.keys(pointLoadApplied);
  return loadPointsKeys;
}

function rowList(data) {
  // gets the data for the first column in table, array of load point, array of directions
  const loadDirection = ["x", "y", "z"];
  const loadPointsKeys = loadPointLocation(data, 0);
  const LoadwithPoint = [loadPointsKeys, loadDirection];
  return LoadwithPoint;
}
function listResult(data) {
  // returns an array of stiffness displacement values for the model pass into the function
  const LoadPoints = loadPointLocation(data, 0);

  return LoadPoints;
}
const targetValue = listResult(validationModel);
console.log(targetValue);
//
////////////////////////////////////////////////////////////

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
      <ModelDescription />
      <TestingTable rowHeading={rowList(validationModel)} />
    </div>
  );
}

export default App;
