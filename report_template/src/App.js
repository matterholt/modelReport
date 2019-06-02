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
import { rowList } from "./logicFunc/rowHeading";

// data json for results __ use this as MOCK data
import DataFile from "./resultData/data.json";
// list to find all model that are in json, use as a dropdown for the future
const listOfModels = DataFile.map(data => data.modelNum);

// Model to be Validation
const cmValidation = "V01R00"; // dropdown or input
const analysisType = "Stiffness";

// [target, cm_model, base]
const validationModel = dataValidation(cmValidation, DataFile);
const [target, base, cm] = validationModel;

function resultLocation(data) {
  const pointLoadApplied = data.results.stiffness;
  return pointLoadApplied;
}
/*
function listResult(data) {
  // returns an array of stiffness displacement values for the model pass into the function
  const LoadPoints = loadPointLocation(data);
  const pointLoadApplied = data.map(model => model.results.stiffness);
  const direction = ["x", "y", "z"];
  // map on map on map....
  const results = pointLoadApplied.map(analysis =>
    LoadPoints.map(part => direction.map(dir => analysis[part][dir]))
  );
  return results;
}
*/
const rowHeadingList = resultLocation(target);
const loadPointKeys = Object.keys(rowHeadingList);
const loadDirections = ["x", "y", "z"];
const rowHeading = rowList(loadPointKeys, loadDirections);
console.log(rowHeading);
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
      <WeightInfo />
      <AnalysisSummary />
      <ModelImg />
      <Footer />
      <CheckValue />
      <ModelDescription />
      <TestingTable rowHeading={rowHeading} />
    </div>
  );
}

export default App;
