function herons(x, n) {
  var guess = x / 2;
  var mean = 0;

  while (true) {
    mean = (guess + x / guess) / 2;
    if (guess.toFixed(n) == mean.toFixed(n)) {
      break;
    }

    guess = mean;
  }
  console.log(guess.toFixed(n));
}

herons(16, 4);
