#!/usr/bin/env node

function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n%i == 0) 
      return false;
  }
  return true;
}

var fs = require('fs');
var outfile = "primes.txt";
var res = "";

var cnt = 0;
var i = 2;

while (cnt < 100) {
  if (isPrime(i)) {
    res += i;
    // write to file
    cnt++;
    if (cnt < 100)
      res += ',';
  }
  i++;
}

console.log(res);
//fs.writeFileSync(outfile, res);

