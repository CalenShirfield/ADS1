


// function to swap adjacent array elements
(arr, i, j) => {
  let x = arr[j];
  arr[j] = arr[i];
  arr[i] = x;
  return arr;
};
