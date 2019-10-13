import React, { useState } from "react";
import "./AddCmModelStyle.css";

function AddData({ addToModelData }) {
  const [showModelForm, hideModelForm] = useState(false);
  const [cmName, setCmName] = useState("");
  const [baseModel, setBaseModel] = useState("");
  const [modelWeight, setModelWeight] = useState("");
  const [modelDescription, setModelDescription] = useState("");

  function addDataObj() {
    const cmModelData = {
      cmModelName: cmName,
      baseName: baseModel,
      modelWeight: modelWeight,
      description: modelDescription
    };
    addToModelData(cmModelData);
    clear();
  }

  function clear() {
    setCmName("");
    setBaseModel("");
    setModelWeight("");
    setModelDescription("");
  }
  if (showModelForm === true) {
    return (
      <div className="AddingField">
        <h3> Add data for Counter Measure</h3>
        <label>
          Model Name:
          <br />
          <input
            value={cmName}
            onChange={e => setCmName(e.target.value)}
          ></input>
        </label>
        <label>
          Base Model:
          <br />
          <input
            value={baseModel}
            onChange={e => setBaseModel(e.target.value)}
          ></input>
        </label>
        <label>
          Model Weight (kg.):
          <br />
          <input
            value={modelWeight}
            onChange={e => setModelWeight(e.target.value)}
          ></input>
        </label>
        <label>
          Model Changes:
          <br />
          <textarea
            rows="5"
            cols="33"
            value={modelDescription}
            onChange={e => setModelDescription(e.target.value)}
          ></textarea>
        </label>
        <div>
          <button className="Button add" onClick={addDataObj}>
            Add Model
          </button>
          <button className="Button clear" onClick={() => hideModelForm(false)}>
            Done
          </button>
        </div>
      </div>
    );
  } else {
    return <button onClick={() => hideModelForm(true)}> Add Model</button>;
  }
}

export default AddData;
