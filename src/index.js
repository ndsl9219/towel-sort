
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  }

  let total = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      total = total.concat(matrix[i].reverse());
    } else 
      total = total.concat(matrix[i]);
  }
  
  return total;
}