export const arrayToObject = (arr = []) => {
  return arr.reduce((result, item) => {
    result[item.id] = item;

    return result;
  }, {});
};
