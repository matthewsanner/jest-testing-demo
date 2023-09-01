function capitalizeString(inputString) {
  if ((inputString.length = 0)) {
    return inputString;
  } else {
    let capitalizedInput =
      inputString.charAt(0).toUpperCase() + inputString.slice(1);
    return capitalizedInput;
  }
}

function reverseString(inputString) {
  if ((inputString.length = 0)) {
    return inputString;
  } else {
    let reversedInput = inputString.split("").reverse().join("");
    return reversedInput;
  }
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function cypher(inputString) {
  inputString = inputString.toLowerCase();
  // Create an empty string to store the result
  let result = "";

  // Loop through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    // Check if the character is a letter (ignore non-alphabet characters)
    if (/[a-z]/.test(char)) {
      // Find the ASCII code of the character and apply the shift factor of +1
      const shiftedCharCode = char.charCodeAt(0) + 1;

      // Handle wrapping from 'z' to 'a'
      if (shiftedCharCode > 122) {
        shiftedCharCode -= 26;
      }

      // Convert the shifted ASCII code back to a character
      const shiftedChar = String.fromCharCode(shiftedCharCode);

      result += shiftedChar;
    } else {
      // If the character is not a letter, leave it unchanged
      result += char;
    }
  }

  return result;
}

function analyzeArray(inputArray) {
  let object = {};
  // Find the average
  let sum = inputArray.reduce((acc, currentValue) => acc + currentValue, 0);
  object.average = sum / inputArray.length;

  // Find the min
  object.min = Math.min(...inputArray);

  // Find the max
  object.max = Math.max(...inputArray);

  // Find the length
  object.length = inputArray.length;

  return object;
}

module.exports = {
  reverseString,
  capitalizeString,
  calculator,
  cypher,
  analyzeArray,
};
