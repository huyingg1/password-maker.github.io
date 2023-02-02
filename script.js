"use strict";
// Assignment code here
let passwordlength;
let lowercase;
let uppercase;
let numbers;
let specialcharacters;
//function to determine the password length
function picklength() {
  passwordlength = prompt("Length of Your Password, >= 8 and <=128");
  if (passwordlength >= 8 && passwordlength <= 128) {
  } else {
    alert("repick your password length between 8 and 128!");
    picklength();
  }
}
//function to determine whether include lowercase in the password
function includelowercase() {
  lowercase = prompt("include Lowercase in password? yes or no");
  if (lowercase == "yes" || lowercase == "no") {
  } else {
    alert("Please answer yes or no, all lowercase");
    includelowercase();
  }
}

//function to determine whether include uppercase in the password
function includeuppercase() {
  uppercase = prompt("include Uppercase in password? yes or no");
  if (uppercase == "yes" || uppercase == "no") {
  } else {
    alert("Please answer yes or no, all lowercase");
    includeuppercase();
  }
}
//function to determine whether include numbers in the password
function includenumbers() {
  numbers = prompt("include Numbers in password? yes or no");
  if (numbers == "yes" || numbers == "no") {
  } else {
    alert("Please answer yes or no, all lowercase");
    includenumbers();
  }
}
//function to determine whether include special characters in the password
function includespecialcharacters() {
  specialcharacters = prompt(
    "include special characters in password? yes or no"
  );
  if (specialcharacters == "yes" || specialcharacters == "no") {
  } else {
    alert("Please answer yes or no, all lowercase");
    includespecialcharacters();
  }
}
//combine the four criteria functions together, and guarantee at least one answer is yes
function checkyes() {
  includelowercase();
  includeuppercase();
  includenumbers();
  includespecialcharacters();
  if (
    lowercase == "no" &&
    uppercase == "no" &&
    numbers == "no" &&
    specialcharacters == "no"
  ) {
    alert("You must answer at least one 'yes'!!!!!");
    checkyes();
  } else {
  }
}
//function to generate the password
function generatePassword() {
  const lowercaselist = "abcdefghijklmnopqrstuvwxyz";
  const uppercaselist = lowercaselist.toUpperCase();
  const numberlist = "0123456789";
  const specialcharlistincom = " !'()*+,-$#&%./:;<=>?@[]^_`{|}~";
  const specialcharlist = specialcharlistincom.concat('"');
  let finallist = "";
  let yourpassword = [];

  picklength();
  alert(
    "You must answer at least one 'yes' for the following password criteria"
  );
  checkyes();
  if (lowercase == "yes") {
    finallist = finallist.concat(lowercaselist);
  } else {
  }
  if (uppercase == "yes") {
    finallist = finallist.concat(uppercaselist);
  } else {
  }
  if (numbers == "yes") {
    finallist = finallist.concat(numberlist);
  } else {
  }
  if (specialcharacters == "yes") {
    finallist = finallist.concat(specialcharlist);
  } else {
  }

  //generate the password, array
  for (let i = 0; i < passwordlength; i++) {
    yourpassword.push(finallist[Math.trunc(Math.random() * finallist.length)]);
  }
  //randomly replace a special characters into the password
  if (specialcharacters == "yes") {
    yourpassword[Math.trunc(Math.random() * yourpassword.length)] =
      specialcharlist[Math.trunc(Math.random() * specialcharlist.length)];
  } else {
  }
  //convert array into string
  yourpassword = yourpassword.join("");
  alert(`your password is:${yourpassword}`);

  return yourpassword;
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
