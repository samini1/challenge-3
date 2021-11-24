# Password Generator

#This application should randomly generate a password that provides greater security.

## Needed functionality

clickButton creates prompts for password criteria user can select

promptLength --> user chooses minimum 8, maximum 128 characters. 
    lengthError- user chooses less than 8 or more than 128, allow user to try again.

if at least one character type prompt is confirmed, password generator should run;
else, prompt user to return to start of loop;

generatePassword --> 
    checks character length
    checks to include lowercase
    checks to include uppercase
    checks to unclude Numeric
    checks to include Special
    randomly generates password from these arrays.
        How do I do this?
        Needs to check if at least 1 from each confirmed type is included?
