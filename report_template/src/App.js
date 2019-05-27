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
//import DataFile from "./result_data/data.json";

function App() {
  return (
    <div className="App">
      <Header verRev="V2R00" analysis="Stiffness Analysis" />
      <ResultTable />
      <WeightInfo />
      <AnalysisSummary />
      <ModelImg />
      <Footer />
    </div>
  );
}

export default App;
