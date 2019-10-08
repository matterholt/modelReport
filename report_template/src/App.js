import React, { useState } from "react";
////   Style
import "./App.css";
import PrintableDoc from "./print_doc/PrintableFormat";
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

function App() {
  return (
    <div>
      <h1>FEA request</h1>
      <PrintFEARequest />
    </div>
  );
}

export default App;
