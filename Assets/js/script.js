// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare generatepassword function and declare varibles of possible characters
function generatePassword() {
  var lowerCaseCharacters = "abcdefghijklomnpqrstuvwxyz";
  var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()";

  // Declare var to store possible character inputs

  var possibleCharacters = "";

  // gather input data for password
  var characterCount = prompt(
    "How many characters would you like to include in your password?"
  );
  if (!characterCount) {
    return "Generate a new password!";
  }
  // check if they are within the charactercount parameters
  while (characterCount < 8 || characterCount > 128) {
    alert("Your password must be between 8 and 128 characters.");
    characterCount = prompt(
      "How many characters would you like to include in your password?"
    );
  }

  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("Would you like to include UPPERCASE characters?");
  var number = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");

  // check if they have selceted any type of characters if not ask again.

  while (!(lowercase || uppercase || number || special)) {
    alert("You must select at least one type of character");
    lowercase = confirm("Would you like to include lowercase characters?");
    uppercase = confirm("Would you like to include UPPERCASE characters?");
    number = confirm("Would you like to include numeric characters?");
    special = confirm("Would you like to include special characters?");
  }

  // Declare var for password and add random possible characters to password string
  var password = "";

  if (lowercase) {
    possibleCharacters += lowerCaseCharacters;
  }
  if (uppercase) {
    possibleCharacters += upperCaseCharacters;
  }
  if (number) {
    possibleCharacters += numericCharacters;
  }
  if (special) {
    possibleCharacters += specialCharacters;
  }

  for (var i = 0; i < characterCount; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
