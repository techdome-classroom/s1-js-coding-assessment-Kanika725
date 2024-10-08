const decodeTheRing = function (s, p) {

    // write your code here

    const match = (i, j) => {
      if (i === s.length && j === p.length) return true;
      
      if (j === p.length) return false;
  
      if (p[j] === '*') {
        return match(i, j + 1) || (i < s.length && match(i + 1, j));
      }
  
      if (i < s.length && (p[j] === '?' || s[i] === p[j])) {
        return match(i + 1, j + 1);
      }
  
      return false;
    };
  
    return match(0, 0);

  };
  
  module.exports = decodeTheRing;