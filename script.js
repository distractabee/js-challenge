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

// user can choose which sets of characters to include in password generation
  var chooseUppers = confirm("Do you want your password to contain upper case letters?");
  var chooseLowers = confirm("Do you want your password to contain lower case letters?");
  var chooseNumbers = confirm("Do you want your password to contain numbers?");
  var chooseSpecials = confirm("Do you want your password to contain special characters?");

  // checks that user has selected at least one of the four potential sets of characters for password generation and stops them from proceeding if not 
  if (!chooseUppers && !chooseLowers && !chooseNumbers && !chooseSpecials) {
  alert("Please choose at least one character type!");
  return false;
}

  // adds the results of the user choices to the empty array for eventual random selection
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

  //randomly selects characters from the array including all selected characters until it reaches the desired length

  for (var i = 0; i < userPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalCharactersArr.length);
    finalPasswordArr.push(finalCharactersArr[randomIndex]);
  }

  /* these sections of code check the final password array to make sure that it contains at least one of the apropriate character set for each option the user selected.
    If that character is not found, it takes a random index from the character set and replaces another random index in the final array with it. Easiest way I could come 
    up with to make sure that all user-selected characters are included
 */

    if (chooseUppers) {
      var foundUppers = 0;
      for (var i = 0; i < userPasswordLength; i++) {
        if (specialCharSet.indexOf(finalPasswordArr[i]) > -1) {
          foundUppers = foundUppers + 1;
        }
      }
      if (foundUppers == 0) {
        // This should be outside the loop to check after the entire password is checked - Alex Kaye
        finalPasswordArr[Math.floor(Math.random() * finalCharactersArr.length)] = upperCaseCharSet[Math.floor(Math.random() * finalCharactersArr.length)];
      }
    }

    if (chooseLowers) {
      var foundLowers = 0;
      for (var i = 0; i < userPasswordLength; i++) {
        if (specialCharSet.indexOf(finalPasswordArr[i]) > -1) {
          foundLowers = foundLowers + 1;
        }
      }
      if (foundLowers == 0) {
        finalPasswordArr[Math.floor(Math.random() * finalCharactersArr.length)] = lowerCaseCharSet[Math.floor(Math.random() * finalCharactersArr.length)];
      }
    }

    if (chooseNumbers) {
      var foundNumbers = 0;
      for (var i = 0; i < userPasswordLength; i++) {
        if (specialCharSet.indexOf(finalPasswordArr[i]) > -1) {
          foundNumbers = foundNumbers + 1;
        }
      }
      if (foundNumbers == 0) {
        finalPasswordArr[Math.floor(Math.random() * finalCharactersArr.length)] = numberSet[Math.floor(Math.random() * finalCharactersArr.length)];
      }
    }

    if (chooseSpecials) {
      var foundSpecials = 0;
      for (var i = 0; i < userPasswordLength; i++) {
        if (specialCharSet.indexOf(finalPasswordArr[i]) > -1) {
          foundSpecials = foundSpecials + 1;
        }
      }
      if (foundSpecials == 0) {
        finalPasswordArr[Math.floor(Math.random() * userPasswordLength)] = specialCharSet[Math.floor(Math.random() * specialCharSet.length)];
      }
    }

//turns the array into a string
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
