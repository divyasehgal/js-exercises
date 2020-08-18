//write a JS program to create a new string from a given string taking the first 3 chars and last three chars from a string
//and adding them together. String length must be 3 or more, if not, original string is returned.

let stringnew = (string1) => {
    if (string1.length > 3) {
      console.log(string1.slice(0, 3) + string1.slice(-3));
    } else {
      console.log(string1);
    }
  };
  
  console.log(stringnew("abc"));
  console.log(stringnew("abcdefgh"));
  