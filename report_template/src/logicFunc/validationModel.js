function dataValidation(cmName, odj) {
  // use filter in one shot and only return one array.
  function gettingOneArray(x) {
    if (x.modelNum === "target") {
      return x;
    } else if (x.modelNum === cmName) {
      return x;
    }
  }

  // Array of just target and cm model
  const checkValueAll = odj.filter(validationValue =>
    gettingOneArray(validationValue)
  );

  // Getting base model reference
  const baseModelName = checkValueAll[1].info.modelBasedOn;
  const baseModelObj = odj.filter(
    validationValue => validationValue.modelNum === baseModelName
  );

  const dataToValidate = checkValueAll.concat(baseModelObj);
  console.log(dataToValidate);
}

export { dataValidation };
