// Return all the Prime numbers in a Array
// Using anonymous Function

var numbers = [1,2,3,4,5,6,7,8,9,10];

var primeNumbers = numbers.filter(function(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
});

console.log("Prime Numbers:", primeNumbers);
