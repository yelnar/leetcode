/**
 * https://leetcode.com/problems/pascals-triangle
 * 
 * Given numRows, generate the first numRows of Pascal's triangle.
 * 
 * For example, given numRows = 5,
 * Return
 * 
 * [
 *     [1],
 *    [1,1],
 *   [1,2,1],
 *  [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    
    let triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        let row = [];
        let previousRow = triangle[i - 1];
        let length = previousRow.length;

        for (let j = 0; j < length - 1; j++) {
            row[j + 1] = previousRow[j] + previousRow[j + 1];
        }
        
        row[0] = 1;
        row[length] = 1;
        triangle[i] = row;
    }

    return triangle;
};

console.log(generate(5));