const {
  reverseString,
  capitalizeString,
  calculator,
  cypher,
  analyzeArray,
} = require("../odinexamples");

test("Capitalizes string", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});

test("Reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Add function", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(5, 0)).toBe(5);
});

test("Subtract function", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(6, 1)).toBe(5);
});

test("Multiply function", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
  expect(calculator.multiply(6, 1)).toBe(6);
});

test("Divide function", () => {
  expect(calculator.divide(15, 3)).toBe(5);
  expect(calculator.divide(6, 1)).toBe(6);
});

test("Caesar cypher function", () => {
  expect(cypher("Hello")).toBe("ifmmp");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
