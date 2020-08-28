function solution(str, ending) {
  let end = str.length - ending.length;
  if (str.substr(end) == ending) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("abcde", "cde"));
