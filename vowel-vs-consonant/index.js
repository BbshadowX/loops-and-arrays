const word = "input word here";
// define a veriable with the string that you want to check for vowels and consonants
let vowels = ["a", "e", "i", "o", "u"];
// define vowels "a", "e", "i", "o", and "u" are considered vowels
let vcounter = 0;
let ccounter = 0;
// define 2 veriables with a value of 0
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    vcounter++;
  } else {
    ccounter++;
  }
  // create a loop that checks if the variable has a vowel or consonant and incriments the value for the counter
}
console.log(
  word + " has " + ccounter + " consonants and " + vcounter + " vowels"
);
// print how many vowels and consonants that the word has
