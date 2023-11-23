// Return all the palindromes in a Array
// Using Anonymous function

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = words.filter(function(word) {
    
    var lowerWord = word.toLowerCase();
    
    // Reverse the word
    var reversedWord = lowerWord.split('').reverse().join('');
    
    // Check if the original word is equal to its reverse
    return lowerWord === reversedWord;
});

console.log("Palindromes: ", palindromes);
