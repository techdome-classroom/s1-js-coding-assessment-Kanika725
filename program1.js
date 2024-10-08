const getTotalIsles = function (grid) {


  // write your code here
   // Edge case: if the grid is empty
   if (!grid || grid.length === 0) return 0;

   let totalIslands = 0;
   const rows = grid.length;
   const cols = grid[0].length;
 
   // Helper function for Depth First Search
   const dfs = (i, j) => {
     // If out of bounds or the current cell is water, return
     if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') return;
 
     // Mark the current cell as visited by changing it to water
     grid[i][j] = 'W';
 
     // Explore in all four directions
     dfs(i - 1, j); // Up
     dfs(i + 1, j); // Down
     dfs(i, j - 1); // Left
     dfs(i, j + 1); // Right
   };
 
   // Iterate through each cell in the grid
   for (let i = 0; i < rows; i++) {
     for (let j = 0; j < cols; j++) {
       // If the cell contains land ('L'), it's a new island
       if (grid[i][j] === 'L') {
         totalIslands++;
         // Perform DFS to mark all connected land parts as visited
         dfs(i, j);
       }
     }
   }
 
   return totalIslands;

};

module.exports = getTotalIsles;