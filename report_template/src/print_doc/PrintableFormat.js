import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultTable from "./components/ResultTable";
import WeightInfo from "./components/WeightInfo";
import AnalysisSummary from "./components/AnalysisSummary";
import ModelImg from "./components/ModelImg";

function PrintFEARequest() {
  const [showPrint, hidePrint] = useState(false);
  if (showPrint === false) {
    return (
      <div>
        <button onClick={() => hidePrint(true)}>Fea request report</button>
      </div>
    );
  } else {
    return (
      <>
        <button onClick={() => hidePrint(false)}> Hide page</button>
        <PrintableDoc />
      </>
    );
  }
}

function PrintableDoc() {
  const cmValidation = "V01R00"; // dropdown or input
  const analysisType = "Stiffness";
  return (
    <div className="App">
      <Header verRev={cmValidation} analysis={analysisType} />
      <ResultTable />
      <WeightInfo />
      <AnalysisSummary />
      <ModelImg />
      <Footer />
    </div>
  );
}
export default PrintFEARequest;
