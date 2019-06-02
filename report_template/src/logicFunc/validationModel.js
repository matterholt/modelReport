/**
 * filter through the completed json file looking for the model that are requested
 *
 * returns an array of objects of model to be validated and reported
 *
 * can be improved
 *
 *
 * @param {*} cmName //not sure , look into
 * @param {*} odj
 */

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
  return dataToValidate;
}

export { dataValidation };
