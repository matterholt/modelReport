import React from "react";
////   Style
import "./App.css";

////   Components
import Header from "./components/Header";
import ModelDescription from "./components/ModelDescription";
import AnalysisSummary from "./components/AnalysisSummary";
import ResultTable from "./components/ResultTable";
//import ResultsChart from "./ResultsChart";

function App() {
  return (
    <div className="App">
      <Header verRev="V2R00" analysis="Stiffness Analysis" />
      <ModelDescription />
      <hr />
      <AnalysisSummary />
      <ResultTable />
    </div>
  );
}

export default App;
