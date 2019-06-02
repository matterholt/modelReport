function rowList(loadPointsKeys, loadDirection) {
  // gets the data for the first column in table, array of load point, array of directions
  // create an array of array [["Uaa","x"],["Uaa","y"]]
  const loadPointwithDir = loadPointsKeys.map(loadPoint =>
    loadDirection.map(dir => [loadPoint, dir])
  );
  return loadPointwithDir;
}

export { rowList };
