// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function searchCharacterClasses(inputString){
    //Defining regular expression fr character classes
    const digitRegex = /\d/g; // Matches digits
    const uppercaseRegex = /[A-Z]/g; // Matches uppercase letters
    const lowercaseRegex = /[a-z]/g; // Matches lowercase letters
    const specialCharRegex = /[^A-Za-z0-9]/g; // Matches special characters

    // Finding matches for each character class in the input string
    const digits = inputString.match(digitRegex);
    const uppercaseLetters = inputString.match(uppercaseRegex);
    const lowercaseLetters = inputString.match(lowercaseRegex);
    const specialCharacters = inputString.match(specialCharRegex);

    // Returning matches for each character class
    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialCharacters: specialCharacters
    };
}

// Testing the function with a sample input string
const inputString = "Hello 123 World!";

// Getting matches for character classes in the input string
const matches = searchCharacterClasses(inputString);

// Displaying the matches
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);