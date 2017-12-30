const some = (arr, func) => {
  if (Array.isArray(arr)) {
    return arr.some(func);
  }
  return false;
};

export default some;
