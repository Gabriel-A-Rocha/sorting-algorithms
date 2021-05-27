class BruteForceSortAlgorithm {
  constructor() {}

  static sort(array) {
    const sortedArray = [...array];
    let index = 0;

    const applySwitchAndResetIndex = (i) => {
      const current = sortedArray[i];
      sortedArray.splice(i, 1);
      sortedArray.splice(i + 1, 0, current);
      index = 0;
    };

    const isSwitchApplicable = (i) => {
      return sortedArray[i] - sortedArray[i + 1] > 0 ? true : false;
    };

    do {
      isSwitchApplicable(index) ? applySwitchAndResetIndex(index) : index++;
    } while (index < sortedArray.length - 1);

    return [...sortedArray];
  }
}

module.exports = BruteForceSortAlgorithm;
