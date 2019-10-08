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
