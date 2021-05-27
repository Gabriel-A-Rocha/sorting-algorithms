const BruteForceSortAlgorithm = require("./bruteforceSort");
const JavascriptSortAlgorithm = require("./javascriptSort");

const array = [2, 9, 1, 3, 4, 5, 7, 6, 8, 1];

test("Brute force algorithm should sort array properly", () => {
  const sortedArray = BruteForceSortAlgorithm.sort(array);
  expect(sortedArray).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Javascript sort algorithm should sort array properly", () => {
  const sortedArray = JavascriptSortAlgorithm.sort(array);
  expect(sortedArray).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
