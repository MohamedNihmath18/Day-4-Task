// Return all the palindromes in a array

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = words.filter((word) => {
    var lowerWord = word.toLowerCase();
    var reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
});

console.log("Palindromes: ", palindromes);
