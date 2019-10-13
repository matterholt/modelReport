import React, { useState } from "react";
////   Style
import "./App.css";
import PrintFEARequest from "./print_doc/PrintableFormat";
import AddData from "./components/AddCmModel";

// create component that
function DisplayData({ doc_Model }) {
  const cmInfo = doc_Model.map((x, y) => {
    return (
      <>
        <ul className="table">
          <li className="nameResult" key="y + doc_model.length">
            {x.cmModelName}
          </li>
          <li className="nameResult" key="y + doc_model.length">
            {x.baseName}
          </li>
          <li className="nameResult" key="y + doc_model.length">
            {x.modelWeight}
          </li>
          <li className="nameResult" key="y + doc_model.length">
            {x.description}
          </li>
        </ul>
      </>
    );
  });
  return <div>{cmInfo}</div>;
}

function App() {
  const [doc_Model, updateDocModel] = useState([]);

  function addToModelData(modelData) {
    console.log("Model has been added");
    let addData = [...doc_Model, modelData];
    updateDocModel(addData);
  }
  return (
    <div>
      <h1>FEA request</h1>
      <AddData addToModelData={addToModelData} />
      <h2>Results added </h2>
      <DisplayData doc_Model={doc_Model} />
      <PrintFEARequest />
    </div>
  );
}

export default App;
