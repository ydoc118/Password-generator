// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultEl = document.getElementById("password");
var randomGen = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
 };

// Write password to the #password input
function writePassword() {
  var lengthEl = prompt("How many characters do you want your password to be?");
  if (lengthEl < 8 || lengthEl > 128) {
    alert("Your password must be between 8-128 characters.");
    writePassword();
  }

  if (lengthEl >= 8 || lengthEl <=128) {
    var pwLength = parseInt(lengthEl);
    console.log(pwLength);
  }
  
    var uppercaseEl = confirm("Do you want to include uppercase letters in your password?");
    var lowercaseEl = confirm("Do you want to include lowercase letters in your password?");
    var numbersEl = confirm("Do you want to include numbers in your password?");
    var symbolsEl = confirm("Do you want to include special characters in your password?");
    console.log(uppercaseEl, lowercaseEl, numbersEl, symbolsEl);
    
    while (uppercaseEl != true && lowercaseEl != true && numbersEl != true && symbolsEl != true) {
      alert("You must select at least one parameter!");
      var uppercaseEl = confirm("Do you want to include uppercase letters in your password?");
      var lowercaseEl = confirm("Do you want to include lowercase letters in your password?");
      var numbersEl = confirm("Do you want to include numbers in your password?");
      var symbolsEl = confirm("Do you want to include special characters in your password?");
    }
    

    resultEl.innertext = generatePassword(
      uppercaseEl,
      lowercaseEl,
      numbersEl,
      symbolsEl
    );

  function generatePassword(upper, lower, number, symbol) {

    
    let generatedPassword = "";

    var typesCount = upper + lower + number + symbol;
    console.log(typesCount);
    
    var typesArr = [{upper}, {lower}, {number}, {symbol}].filter(
      item => Object.values(item)[0]
    );
    console.log(typesArr);

    for(i = 0; i < pwLength; i += typesCount) {
      typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        console.log('funcName: ' + funcName)

        generatedPassword += randomGen[funcName]();

      });
    }

    console.log(generatedPassword);

      
      var passwordText = document.querySelector("#password");

      passwordText.value = generatedPassword;

  }



}





// // Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = "!@#$%^&*()-=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());



 

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  





