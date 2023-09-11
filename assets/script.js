// Assignment code here
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!#$%&*+.;=?@_~";

  var length = Number(prompt("Please choose a length of at least 8 characters and no more than 128 characters"));
    if (length >= 8 && length <= 128) {
      var passwordLength = length;
    } else {
      alert("Your answer is not in the required range. It must be a length of at least 8 characters and no more than 128 characters. Please try again.");
      return
    }
  var lowercaseAnswer = confirm("Do you want to include lowercase characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
  var uppercaseAnswer = confirm("Do you want to include uppercase characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
  var numericAnswer = confirm("Do you want to include numbers in your password? Select 'OK' for yes. Select 'Cancel' for no.")
  var specialAnswer = confirm("Do you want to include special characters in your password? Select 'OK' for yes. Select 'Cancel' for no.");
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
