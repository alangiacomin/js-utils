const arrayFill = (cnt, fill) => {
  if (typeof cnt !== 'number' || cnt < 1) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < cnt; i++) {
    arr.push(fill);
  }
  return arr;
};

export default arrayFill;
