import React, { useState } from "react";
////   Style
import "./App.css";
import PrintableDoc from "./print_doc/PrintableFormat";
import AddData from "./components/AddCmModel";
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

function DisplayData({ doc_Model }) {
  const cmInfo = doc_Model.map((x, y) => {
    return (
      <>
        <li>{x.cmModelName}</li>
        <li>{x.baseName}</li>
        <li>{x.modelWeight}</li>
        <li>{x.description}</li>
      </>
    );
  });
  return <ul>{cmInfo}</ul>;
}

function App() {
  const [doc_Model, updateDocModel] = useState([]);

  function addToModelData(modelData) {
    console.log("Model has been added");
    let tryME = [...doc_Model, modelData];
    updateDocModel(tryME);
  }

  return (
    <div>
      <h1>FEA request</h1>
      <PrintFEARequest />
      <AddData addToModelData={addToModelData} />
      <h1>find it</h1>
      <DisplayData doc_Model={doc_Model} />
    </div>
  );
}

export default App;
