// Assignment code here
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const specialChar = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//This function generates the length of the password
function getPassswordLength() {
  //debugger;
  let passwordLength = 0;
  let isInputNumber = true;

  while (passwordLength < 8 || passwordLength > 128 || isInputNumber == false) {
    passwordLength = parseInt(
      window.prompt("Please enter a password length between 8 - 128 character.")
    );

    if (isNaN(passwordLength)) {
      isInputNumber = false;
    } else {
      isInputNumber = true;
    }
  }

  return passwordLength;
}

function getUserCharSelection() {
  let userSelection = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialChar: false,
  };

  while (
    !userSelection.lowerCase &&
    !userSelection.upperCase &&
    !userSelection.numbers &&
    !userSelection.specialChar
  ) {
    userSelection.lowerCase = window.confirm(
      "Would you like to include lower case characters in your password"
    );

    userSelection.upperCase = window.confirm(
      "Would you like to include upper case characters in your password"
    );

    userSelection.numbers = window.confirm(
      "Would you like to include numbers in your password"
    );

    userSelection.specialChar = window.confirm(
      "Would you like to include special characters in your password"
    );
  }

  return userSelection;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  //debugger;

  const passwordLength = getPassswordLength();
  const userSelection = getUserCharSelection();

  let password = "";
  let passwordGeneratedChars = 0;

  while (passwordGeneratedChars != passwordLength) {
    let characterSelection = getRandomInt(3) + 1;

    if (characterSelection === 1 && userSelection.lowerCase === true) {
      password = password + lowerCase[getRandomInt(lowerCase.length)];
      passwordGeneratedChars++;
    } else if (characterSelection === 2 && userSelection.upperCase === true) {
      password = password + upperCase[getRandomInt(upperCase.length)];
      passwordGeneratedChars++;
    } else if (characterSelection === 3 && userSelection.numbers === true) {
      password = password + numbers[getRandomInt(numbers.length)];
      passwordGeneratedChars++;
    } else if (characterSelection === 4 && userSelection.specialChar === true) {
      password = password + specialChar[getRandomInt(specialChar.length)];
      passwordGeneratedChars++;
    }
  }
  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
