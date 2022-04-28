export const isValueEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
};

export const isValueNaN = (value) => {
  if (isValueEmpty(value) || isNaN(value)) {
    return true;
  }
  return false;
};

export const getAccumulationOfArray = (array, initialValue, accumulator) => {
  if (
    !array ||
    !array.length ||
    array.constructor !== Array ||
    isValueNaN(initialValue) ||
    isValueEmpty(accumulator)
  ) {
    return 0;
  }
  let result = initialValue;
  for (let i = 0; i < array.length; ++i) {
    if (isNaN(array[i])) {
      return 0;
    }
    result = accumulator(result, array[i]);
  }
  return result;
};
