
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  else if (matrix.length === 2) {
    let arr1 = matrix[0].sort((a,b) => a - b);
    let arr2 = matrix[1].sort((a,b) => b - a);
    return arr1.concat(arr2);
  }

  else if (matrix.length === 3) {
    let arr1 = matrix[0].sort((a,b) => a - b);
    let arr2 = matrix[1].sort((a,b) => b - a);
    let arr3 = matrix[2].sort((a,b) => a - b);
    return arr1.concat(arr2, arr3);
  }

  else if (matrix.length === 4) {
    let arr1 = matrix[0].sort((a,b) => a - b);
    let arr2 = matrix[1].sort((a,b) => b - a);
    let arr3 = matrix[2].sort((a,b) => a - b);
    let arr4 = matrix[3].sort((a,b) => b - a);
    return arr1.concat(arr2, arr3, arr4);
  }
}
