//// TODO  need to clean up file
function resultLocation(data) {
  /// remove from this module,
  const pointLoadApplied = data.results.stiffness;
  return pointLoadApplied;
}
function listResult(data) {
  // returns an array of stiffness displacement values for the model pass into the function
  // ADD CHECKS FOR IF THE VALUE IS 0, S
  var dispValues = [];
  const loadPoints = resultLocation(data);
  for (var property1 in loadPoints) {
    const rowOne = loadPoints[property1];
    for (var property2 in rowOne) {
      dispValues.push(rowOne[property2]);
    }
  }
  return dispValues;
}

export { listResult };
