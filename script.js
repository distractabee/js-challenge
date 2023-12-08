// Assignment Code
var upperCaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  /* create empty arrays to hold all sets of characters selected to be included
     in generating the password as well as the characters randomly generated for the password
  */
  var finalCharactersArr = [];
  var finalPasswordArr = [];

  var chooseLength = prompt("Choose a length of 8 to 128 characters for your password.");
  var userPasswordLength = parseInt(chooseLength)
// checks to make sure user has selected an appropriate length for their password and stops them from proceeding if not 
  if (!userPasswordLength || userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Please enter a number between 8 and 128!");
    return false;
} 

// users can choose which sets of characters to include in password generation
  var chooseUppers = confirm("Do you want your password to contain upper case letters?");
  var chooseLowers = confirm("Do you want your password to contain lower case letters?");
  var chooseNumbers = confirm("Do you want your password to contain numbers?");
  var chooseSpecials = confirm("Do you want your password to contain special characters?");

  if (!chooseUppers && !chooseLowers && !chooseNumbers && !chooseSpecials) {
  alert("Please choose at least one character type!");
  return false;
}

  if (chooseUppers) {
    finalCharactersArr = finalCharactersArr.concat(upperCaseCharSet)
  }
  if (chooseLowers) {
    finalCharactersArr = finalCharactersArr.concat(lowerCaseCharSet)
  }
  if (chooseNumbers) {
    finalCharactersArr = finalCharactersArr.concat(numberSet)
  }
  if (chooseSpecials) {
    finalCharactersArr = finalCharactersArr.concat(specialCharSet)
  }

  for (var i = 0; i < userPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalCharactersArr.length);
    finalPasswordArr.push(finalCharactersArr[randomIndex]);
  }
  return finalPasswordArr.join('');
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
