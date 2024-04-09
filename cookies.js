
var distributeCookies = function(cookies, k) {
    // Initialize memoization table
    const table = new Map();
    // Set minUnfairness
    let minUnfairness = Infinity;
  
    // Helper function to calculate unfairness
    function helper(ind, children) {
      // Base case
      if (ind === cookies.length) {
        // All cookies have been distributed
        const sortedChildren = ind + '-' + children.sort().join(',');
        
        // Check if the result is already memoized.
        // If so, we don't need to calculate and compare the unfairness
        if (table.has(sortedChildren)) return;
  
        // Memoize the result
        table.set(sortedChildren, true);
        // Calculate and update minUnfairness
        minUnfairness = Math.min(minUnfairness, Math.max(...children));
        return;
      }
  
      // Distribute the current cookie to each child
      for (let i = 0; i < k; i++) {
        const filledChildren = [...children];
        filledChildren[i] += cookies[ind];
        // Recursively call helper function to do the same for the rest of cookies
        helper(ind + 1, filledChildren);
      }
      
    
    }
  
    const children = Array(k).fill(0);
    helper(0, children);
  
    return minUnfairness;
  };
  
  console.log(distributeCookies([6, 1, 3, 2], 3));
  