// function to search for first appearance of item in an array

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }
  return false;
}
