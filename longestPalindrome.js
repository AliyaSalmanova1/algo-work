const longestPalindrome = (s) => {
    let areOdds = 0;
    let cache = {};
    let result = 0;
    for (let i = 0; i < s.length; i++){
        
        if (cache[s[i]]) {
            cache[s[i]]++;
        } else {
            cache[s[i]] = 1;
        }

        if (cache[s[i]] === 2) {
            result+=2;
            cache[s[i]] = 0;
            areOdds--;
        } else {
            areOdds++;

            
        }

    }
    if (areOdds > 0) result++;

    return result;
    
};

console.log(longestPalindrome("bb"))