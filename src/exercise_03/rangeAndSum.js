export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const array = [];
  if (end >= start) {
    // eslint-disable-next-line no-plusplus
    for (let index = start; index < end; index++) {
      array.push(index);
    }
  } else {
    // eslint-disable-next-line no-plusplus
    for (let index = start; index > end; index--) {
      array.push(index);
    }
  }
  return array;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let SUM = 0;
  numbers.forEach((element) => {
    SUM += element;
  });
  return SUM;
}
