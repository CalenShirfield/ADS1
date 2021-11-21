// function to calculate square of a number to n decimal places.
// x is input number, n is number of decimal places

function herons(x, n) {
  var guess = x / 2; // guess = 5
  var mean = 0;
  var arr1 = [1];
  var arr2 = [0];

  while (arr1[arr1.length - 1] != arr2[arr2.length - 2]) {
    mean = (guess + x / guess) / 2;
    guess = mean;
    arr1.push(guess);
    arr2.push(guess);
  }
  console.log(guess.toFixed(n));
}

herons(6, 10);

// herons(177972373989286498726548725487254, 10);
