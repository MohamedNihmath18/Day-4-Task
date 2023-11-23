// Using IIFE Function

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = (function() {
    return words.filter(function(word) {
        var lowerWord = word.toLowerCase();
        var reversedWord = lowerWord.split('').reverse().join('');
        return lowerWord === reversedWord;
    });
})();

console.log("Palindromes: ", palindromes);
