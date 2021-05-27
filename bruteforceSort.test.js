class BruteForceSortAlgorithm {
  constructor() {}

  static sort(array) {
    const sortedArray = [...array];
    let index = 0;

    const applySwitch = (i) => {
      const current = sortedArray[i];
      sortedArray.splice(i, 1);
      sortedArray.splice(i + 1, 0, current);
    };

    const switchIfApplicable = (i) => {
      if (sortedArray[i] - sortedArray[i + 1] > 0) {
        applySwitch(i);
        index = 0;
      } else {
        index++;
      }
    };

    do {
      switchIfApplicable(index);
    } while (index < sortedArray.length - 1);
    return [...sortedArray];
  }
}

export default { BruteForceSortAlgorithm };
