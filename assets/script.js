// Assignment code here
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!#$%&*+.;=?@_~";
  var passwordPool = "";
  var passwordLength;
  var passwordGenerated = "";

  var length = Number(prompt("Please choose a length of at least 8 characters and no more than 128 characters."));
    if (length >= 8 && length <= 128) {
      passwordLength = length;
    } else {
      alert("Your answer is not in the required range. It must be a length of at least 8 characters and no more than 128 characters. Please try again.");
      return
    }
  var lowercaseAnswer = confirm("Do you want to include lowercase characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
  if (lowercaseAnswer === true) {
    passwordPool += lowercase;
  }
  var uppercaseAnswer = confirm("Do you want to include uppercase characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
  if (uppercaseAnswer === true) {
    passwordPool += uppercase;
  }
  var numericAnswer = confirm("Do you want to include numbers in your password? Select 'OK' for yes. Select 'Cancel' for no.")
  if (numericAnswer === true) {
    passwordPool += numbers;
  }
  var specialAnswer = confirm("Do you want to include special characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
  if (specialAnswer === true) {
    passwordPool += special;
  }

  if (lowercaseAnswer === false && uppercaseAnswer === false && numericAnswer === false && specialAnswer === false) {
    alert ("You must select at least one character type to include in your password. Please try again.");
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordGenerated += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
  }
  return passwordGenerated;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
