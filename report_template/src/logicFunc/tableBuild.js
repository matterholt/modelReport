function calculatePercent(target, result) {
  // find the percentage to the target
  const percentage = (result / target) * 100;
  const resultPercent = `${percentage.toFixed(1)} %`;
  return resultPercent;
}

function rowArray(headValue, target, cmDis, baseDis) {
  // need to return -- [loadpoint, dir, target, base,base%, cm, cm%]
  const results = headValue.map((partDis, index) => {
    let cmToTarget = calculatePercent(cmDis[index], target[index]);
    let baseToTarget = calculatePercent(baseDis[index], target[index]);
    let array = [
      partDis[0],
      partDis[1],
      target[index],
      baseDis[index],
      baseToTarget,
      cmDis[index],
      cmToTarget
    ];
    return array;
  });

  return results;
}
export { rowArray };
