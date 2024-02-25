//Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
//that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function matchRegex(pattern,inputString){
    //Creating a regular expression object using the provided pattern
    const regex = new RegExp(pattern);

    // using the tes() method of the regular expression object to check for a match in the input string
    return regex.test(inputString);
}
console.log(matchRegex("hello", "hello world"));
console.log(matchRegex("apple", "I like apples"));