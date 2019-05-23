import React from "react";
////   Style
import "./App.css";

////   Components
import Header from "./components/Header";
import ModelDescription from "./components/ModelDescription";
import ResultTable from "./components/ResultTable";
import WeightInfo from "./components/WeightInfo";
import AnalysisSummary from "./components/AnalysisSummary";
import ModelImg from "./components/ModelImg";

// data json for results
//import DataFile from "./result_data/data.json";

function App() {
  return (
    <div className="App">
      <Header verRev="V2R00" analysis="Stiffness Analysis" />
      <ResultTable />
      <WeightInfo />
      <AnalysisSummary />
      <ModelImg />

      <ModelDescription />
    </div>
  );
}

export default App;
