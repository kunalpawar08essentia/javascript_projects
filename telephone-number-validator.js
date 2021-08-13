// Function to validate if string looks like a valid US phone number
function telephoneCheck(string) {
  var regExp=/^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regExp.test(string);
}

telephoneCheck("(986)791-1569");