// Assignment Code
var upperCaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  varChooseLength = prompt("Choose a length of 8 to 128 characters for your password.");
  varChooseUppers = confirm("Do you want your password to contain upper case letters?");
  varChooseLowers = confirm("Do you want your password to contain lower case letters?");
  varChooseNumbers = confirm("Do you want your password to contain numbers?");
  varChooseSpecials = confirm("Do you want your password to contain special characters?");

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
