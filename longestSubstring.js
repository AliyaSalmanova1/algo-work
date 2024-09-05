function findLongestSS(s){
    const hashMap = {};
    let longestSS = 0;
    let left = 0; 

    for (let right = 0; right < s.length; right++){
        
        if (Object.hasOwn(hashMap, [s[right]]) && hashMap[s[right]] >= left){
            //console.log(hashMap, p1, i)
            left = hashMap[s[right]] + 1;
        } else {
            if (right+1-left > longestSS) longestSS = right+1-left;
        }
        hashMap[s[right]] = right;
    }
    return longestSS;
}

console.log(findLongestSS("thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsovert"));

