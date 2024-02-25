// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.

// Function to check for a match and extract specific parts using groups
function extractMatchedParts(pattern, inputString) {
    // Create a regular expression object using the provided pattern
    const regex = new RegExp(pattern);

    // Use the exec() method of the regular expression object to search for a match in the input string
    const match = regex.exec(inputString);

    // Check if there is a match
    if (match !== null) {
        // Extract specific parts using groups
        const matchedParts = {
            fullMatch: match[0], // Full matched text
            day: match[1], // Extracted day
            month: match[2], // Extracted month
            year: match[3] // Extracted year
        };

        // Return the matched parts
        return matchedParts;
    } else {
        // Return null if there is no match
        return null;
    }
}

// Test the function with a pattern to capture parts of a date (day, month, and year)
const inputString = "Today is 25-02-2024";
const pattern = /(\d{2})-(\d{2})-(\d{4})/;

// Call the function to extract matched parts
const matchedParts = extractMatchedParts(pattern, inputString);

// Display the matched parts
if (matchedParts !== null) {
    console.log("Full Match:", matchedParts.fullMatch);
    console.log("Day:", matchedParts.day);
    console.log("Month:", matchedParts.month);
    console.log("Year:", matchedParts.year);
} else {
    console.log("No match found.");
}
