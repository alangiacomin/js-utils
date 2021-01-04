const objectValues = (obj) => {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return [];
  }
  return Object.entries(obj).map((o) => {
    // const [key, value] = o;
    // const key = o[0];
    const value = o[1];
    return value;
  });
};

export default objectValues;
