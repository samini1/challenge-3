// Assignment code here
//select container of the forms
var formEl = document.querySelector("#password-form");
//select all of the check boxes
var checkForms = formEl.querySelectorAll('input[type="checkbox');

var writePassword = function(event) {
  event.preventDefault();

  //enter input values from form
  var lengthInput = document.querySelector("input[name='password-length']").value;
  //try to make length input limit entries from 8-128? Figure out if have time later
  var lowCheck = document.querySelector("#lowercase");
  var uppCheck = document.querySelector("#uppercase");
  var numCheck = document.querySelector("#numeric");
  var spCheck = document.querySelector("#special");

      //set arrays to reference according to values chosen in the form. 
    var lowerChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperChars=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numericChars=['0','1','2','3','4','5','6','7','8','9'];
    var specialChars=['!','@','#','$','%','&', '-', '=', '+'];
    var passChars=[];
  //validate inputs

  //concat selected arrays to the passChars array
if (uppCheck.checked === true) {
  passChars=upperChars.concat(passChars);    
} 
if(spCheck.checked === true) {
  passChars=specialChars.concat(passChars);
}
if (lowCheck.checked === true) {
  passChars=lowerChars.concat(passChars);
}
if (numCheck.checked === true) {
  passChars=numericChars.concat(passChars);
}

  if (lengthInput === "" || lengthInput < 8 ||lengthInput > 128) {
    alert("Please enter a valid length between 8 and 128");
    return false;
    
  } else if (lowCheck.checked ===false && uppCheck.checked ===false && numCheck.checked ===false && spCheck.checked===false) {
    alert("Please select at least one character criteria in order to generate your password");
    return false;    
   } 

  //create an empty string to assign password characters
  var password = "";
  //grab a random character from the array and add it to password
  for (var i = 0 ; i < lengthInput; i++) {
    var passCharacter = passChars[Math.floor(Math.random()*passChars.length)];
    password=password + passCharacter;
  }
  
var passwordText = document.querySelector("#password");
passwordText.value = password;
   
}
var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);
  