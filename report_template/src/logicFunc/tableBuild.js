function rowArray(headValue, targ, cmDis, baseDis) {
  // need to return -- [loadpoint, dir, target, base,base%, cm, cm%]
  const results = headValue.map((x, index) => {
    let target = targ[index];
    let cm = cmDis[index];
    let base = baseDis[index];
    let array = [x[0], x[1], target, cm, base];
    return array;
  });

  return results;
}
export { rowArray };
