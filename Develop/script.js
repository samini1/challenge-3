// Assignment code here
var formEl = document.querySelector("#criteria-form");

var criteriaFormHandler = function(event) {
  event.preventDefault();

  //enter input values from form
  var criteriaLengthInput = document.querySelector("input[name='password-length']").value;
  //try to make length input limit entries from 8-128? Figure out if have time later
  var criteriaLowerInput = document.querySelector("input[name='lowercase']").value;
  var criteriaUpperInput = document.querySelector("input[name='uppercase']").value;
  var criteriaNumericInput = document.querySelector("input[name='numeric']").value;
  var criteriaSpecialInput = document.querySelector("input[name='special']").value;

  //validate inputs

  if (criteriaLengthInput === "" || criteriaLengthInput < 8 ||criteriaLengthInput > 128) {
    alert("Please enter a valid length between 8 and 128");
    return false;
  } else if (criteriaLowerInput ==="" && criteriaUpperInput ==="" && criteriaNumericInput ==="" && criteriaSpecialInput==="") {
    alert("Please select at least one character criteria in order to generate your password");
    return false;
  }
  
  
  
   //this stuff goes somewhere??

   var lowerChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numericChars=['0','1','2','3','4','5','6','7','8','9'];
  var specialChars=['!','@','#','$','%','&', '-', '=', '+'];
  var passChars=[];

//loop to generate password once an array has been created



//need to add chracters to some kind of array to access
  if (criteriaUpperInput.checked === true) {
    passChars=upperChars.concat(passChars);    
  } 
  if(criteriaSpecialInput.checked === true) {
    passChars=specialChars.concat(passChars);
  }
  if (criteriaLowerInput.checked === true) {
    passChars=lowerChars.concat(passChars);
  }
  if (criteriaNumericInput.checked === true) {
    passChars=numericChars.concat(passChars);
  }
    
console.log(passChars);
  
for ( var i=0; i < criteriaLengthInput; i++) {
  //iterate by selecting random character from passChars array
  //use Math object to select a random array position by multiplying by the chosen length.
  //how to make Math array
Math.floor(Math.random()*passChars.length);
}  

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
