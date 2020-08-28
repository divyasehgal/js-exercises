//given a string, reverse each word in a sentence

//var string = "Welcome to the Javascript Guide!";
var string = "Div+1%^#%2ya";
// // var reverseEntireSentence = reverseBySeparator(string, "");
// // var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string
    .split(separator)
    .reverse()
    .join(separator)
    .replace(/[^A-Za-z 0-9]/gi, "");
}
console.log(string);
console.log(reverseBySeparator(string, ""));
