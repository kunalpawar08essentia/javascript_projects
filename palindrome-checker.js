// Function to check if a given string is a palindrome or not.

function palindrome(str) {
  var regExp = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regExp, "");
  let len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("2_A3*3#A2");
