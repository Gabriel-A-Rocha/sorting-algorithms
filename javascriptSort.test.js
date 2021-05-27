const array = [2, 9, 1, 3, 4, 5, 7, 6, 8, 1];

const sortedArray = array.sort((next, current) => next - current);

test("Array should be sorted properly", () => {
  expect(sortedArray).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
