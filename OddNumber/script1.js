/* 1. Do the below programs in Anonymous functions & IIFE 
a. Print odd numbers in an array */
// Using Anonymous Function
var printOddNumbers = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

 
