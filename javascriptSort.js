class JavaScriptSort {
  static sort(array) {
    const sortedArray = [...array].sort((next, current) => next - current);
    return sortedArray;
  }
}

module.exports = JavaScriptSort;
