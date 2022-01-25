console.log(binarySearch(array, 3));

function binarySearch(array, search_value) {
  let upper_bound = array.length - 1;
  let lower_bound = 0;

  while (lower_bound <= upper_bound) {
    let midpoint = Math.floor((lower_bound + upper_bound) / 2);
    if (array[midpoint] === search_value) return true;
    else if (array[midpoint] < search_value) lower_bound = midpoint + 1;
    else upper_bound = midpoint - 1;
  }
  return false;
}
