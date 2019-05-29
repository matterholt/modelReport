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

// data json for results __ use this as MOCK data
import DataFile from "./resultData/data.json";



const CheckValue = () => {
  const findThisNow = DataFile[DataFile.length-1].modelNum;
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

// list to find all model that are in json, use as a dropdown for the future
const listOfModels = DataFile.map((data)=> data.modelNum)
// Temp value to find the index of 
const cmValidation  = "V01R01" // dropdown or input
const analysisType = "Stiffness"

//Issue is when the array is longer than 3, will need to how to use the reference to the cm model how can take.
// Have to get the index of the matching current model name
const weightArray = DataFile.map((data) => data.info.weightKg)


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
