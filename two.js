//Complete the solution so that it reverses the string passed into it.

function solution(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(solution("world"));
