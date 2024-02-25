// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(parameter){
    //Declaring a variable within outerFunction
    let localVar = "Local variable within OuterFunction";

    //Defining and return the inner function
    function innerFunction(){
        console.log(`Parameter of outerFunction: ${parameter}`);
        console.log(`Local variable with outerFunction: ${localVar}`);

    }
    //Returning the inner function
    return innerFunction;
}
// Calling outerFunction to get the inner function
const innerFunc = outerFunction("Parameter value");

//Calling the inner function to demonstrate lexical scoping
innerFunc();