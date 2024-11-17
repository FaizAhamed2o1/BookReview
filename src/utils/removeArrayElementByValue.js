const removeArrayElementByValue = (arr, element) => {
  let index = arr.findIndex((idx) => idx === element);

  if (index > -1) {
    // removes the 1 element at the found index
    arr.splice(index, 1);
  }

  return arr;
};

export default removeArrayElementByValue;
