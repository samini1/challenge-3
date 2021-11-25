// Assignment code here
//select container of the forms
var formEl = document.querySelector("#password-form");
//select all of the check boxes
var checkForms = formEl.querySelectorAll('input[type="checkbox');

var criteriaFormHandler = function(event) {
  event.preventDefault();

  //enter input values from form
  var criteriaLengthInput = document.querySelector("input[name='password-length']").value;
  //try to make length input limit entries from 8-128? Figure out if have time later
  var criteriaLowCheck = document.querySelector("#lowercase");
  var criteriaUppCheck = document.querySelector("#uppercase");
  var criteriaNumCheck = document.querySelector("#numeric");
  var criteriaSpCheck = document.querySelector("#special");

  //validate inputs

  if (criteriaLengthInput === "" || criteriaLengthInput < 8 ||criteriaLengthInput > 128) {
    alert("Please enter a valid length between 8 and 128");
    
  } else if (criteriaLowCheck.checked ===false && criteriaUppCheck.checked ===false && criteriaNumCheck.checked ===false && criteriaSpCheck.checked===false) {
    alert("Please select at least one character criteria in order to generate your password");
    
  }
}
var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", criteriaFormHandler);
  
   //this stuff goes somewhere??

 

// //loop to generate password once an array has been created


// var generatePassword = function(passDataObject) {
//   //this needs to be able to reference the values input into the form, determine which character arrays to add to the password, use a loop to select random values out of the password array and
//   //attach them to the password text

//   //set arrays to reference according to values chosen in the form. Maybe do that here?
//   var lowerChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   var upperChars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//   var numericChars=['0','1','2','3','4','5','6','7','8','9'];
//   var specialChars=['!','@','#','$','%','&', '-', '=', '+'];
//   var passChars=[];


// //how do I get these values into the generatePassword function to check this? Create an object to pass into function?
// if (criteriaUppCheck.checked === true) {
//   passChars=upperChars.concat(passChars);    
// } 
// if(criteriaSpCheck.checked === true) {
//   passChars=specialChars.concat(passChars);
// }
// if (criteriaLowCheck.checked === true) {
//   passChars=lowerChars.concat(passChars);
// }
// if (criteriaNumCheck.checked === true) {
//   passChars=numericChars.concat(passChars);
// }

// }
// console.log(passChars);
 
// //once I figure out how to pass these values in to be checked, create the loop to select random values

// for ( var i=0; i < criteriaLengthInput; i++) {
//   //iterate by selecting random character from passChars array
//   //use Math object to select a random array position by multiplying by the chosen length.
//   //how to make Math array; var password = then add each character to password text?
// var password = Math.floor(Math.random()*passChars.length);
// }  

// }


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   //this tells generate Password function to run and, well generate the password variable
//   var password = generatePassword();

//   //this references the password id, then states that the value property of the passwordText object is password
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// // Add event listener to generate button
// //on button click this should run the writePassword function
// generateBtn.addEventListener("click", writePassword);
