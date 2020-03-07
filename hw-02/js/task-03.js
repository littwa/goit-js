const findLongestWord = function(string) {
  const stringArray = string.split(" ");
  let bigWord = stringArray[0];
  for (const word of stringArray) {
    if (word.length > bigWord.length) {
      bigWord = word;
    }
  }
  return bigWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
