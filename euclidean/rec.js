function gcd(a, n) {
  r = a % n;
  if (r == 0) {
    return n;
  } else {
    a = n;
    n = r;
    console.log(gcd(a, n));
  }
}

console.log(gcd(48, 18));
