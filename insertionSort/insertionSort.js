let arr = [9, 3, 7, 4, 6, 2, 1, 1, 8];

console.log(insertionSort(arr));

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let j = i;
    while (array[i] < array[j - 1] && j > 0) {
      j--;
    }
    shift(array, i, j);
  }
  return array;
}

function shift(array, i, j) {
  if (i <= j) {
    return array;
  }
  let store = array[i];
  for (k = 0; k <= i - j - 1; k++) {
    array[i - k] = array[i - k - 1];
  }
  array[j] = store;
  return array;
}
