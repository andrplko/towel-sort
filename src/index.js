
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) return [];
  return matrix.reduce((acc, cur, i) => {
    if (i % 2 !== 0) {
      acc.push(...cur.reverse())
    } else {
      acc.push(...cur)
    }
    return acc;
  }, [])
}

