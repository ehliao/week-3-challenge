// Assignment Code
var generateBtn = document.querySelector("#generate");

// variety of character types
var lowercase = "abcdefghijklmopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "~!@#$%^&*()_-\{}`<>=";

// Write password to the #password input
function generatepassword() {
  var password = "";
  var passwordText = "";

// asks for password length 8-128 characters
  var passwordLength = prompt("How many characters do you want your password to be?");
  if(passwordLength < 8)  {
    alert("Password must have 8 or more characters.");
  } 
  
  if(passwordLength > 128) {
    alert("Password cannont exceed 128 characters.");
  } 
  
// asks user if they want lower case letters
  var lowercasechoice = confirm("Do you want lowercase letters in your password?");
  if(lowercasechoice) {
    passwordText += lowercase;
  }

// asks user if they want upper case letters
  var uppercasechoice = confirm("Do you want uppercase letters in your password?");
  if(uppercasechoice) {
    passwordText += uppercase;
  }

  // asks user if they want numbers
  var numberchoice = confirm("Do you want numbers in your password?")
  if(numberchoice) {
    passwordText += numeric;
  }

  // asks user if they want special characters
  var specialchoice = confirm("Do you want special charcaters in your password?")
  if(specialchoice) {
    passwordText += special;
  }

  //for loop to randomly generately password based on user input
  for (var i = 0; i < passwordLength; i++) {
    password += passwordText[Math.floor(Math.random() * passwordLength)]
  }

  //shows generated password in the password box
  var passwordBox= document.getElementById("password")
  passwordBox.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatepassword);

