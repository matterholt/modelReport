import React from "react";
////   Style
import "./App.css";

////   Components
import Menu from "./components/Menu";
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
import { listResult } from "./logicFunc/valueDisList";
import { rowArray } from "./logicFunc/tableBuild";
// data json for results __ use this as MOCK data
import DataFile from "./resultData/data.json";

/*
// !!! change to fetch can
//can't fetchdata at local
fetch(DataFile)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  */
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

const rowHeadingList = resultLocation(target);
const loadPointKeys = Object.keys(rowHeadingList);
const loadDirections = ["x", "y", "z"];
// Get the row headings for
const rowHeading = rowList(loadPointKeys, loadDirections);
const rowHeadFlat = rowHeading.flat(1);
// Get array of values for cm model
const targetDisData = listResult(target);
const cmDisData = listResult(cm);
const baseDisData = listResult(base);
//console.log(targetDisData, cmDisData, baseDisData);
//
const evalionTable = rowArray(
  rowHeadFlat,
  targetDisData,
  cmDisData,
  baseDisData
);
console.log(evalionTable);
////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Header verRev={cmValidation} analysis={analysisType} />
      <ResultTable />
      <WeightInfo />
      <AnalysisSummary />
      <ModelImg />
      <Footer />
      <ModelDescription />
      <Menu modelList={listOfModels} />
      <TestingTable rowDataArray={evalionTable} />
    </div>
  );
}

export default App;
