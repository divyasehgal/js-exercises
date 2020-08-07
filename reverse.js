//given a string, reverse each word in a sentence

var string = "Welcome to the Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(string);
console.log(reverseBySeparator(string, ""));
