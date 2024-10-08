const decodeTheRing = function (s, p) {

    // write your code here

    const match = (i, j) => {
      if (i === s.length && j === p.length) return true;
      
      // If pattern is exhausted but message is not, return false
      if (j === p.length) return false;
  
      // Handle '*' in the pattern
      if (p[j] === '*') {
        // Try to match zero or more characters
        return match(i, j + 1) || (i < s.length && match(i + 1, j));
      }
  
      // Handle '?' or exact character match
      if (i < s.length && (p[j] === '?' || s[i] === p[j])) {
        return match(i + 1, j + 1);
      }
  
      // No match
      return false;
    };
  
    // Start the recursive matching
    return match(0, 0);

  };
  
  module.exports = decodeTheRing;