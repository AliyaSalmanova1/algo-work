function groupAnagrams(strs) {
    const output = [];
    const cache = {};

    for (let i = 0; i < strs.length; i++){
        const currStr = strs[i]

        const alphabet = Array(26).fill(0);
        
        for (let letter of strs[i]){
            alphabet[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        //console.log(alphabet)
        const key = alphabet.join('*');
        //console.log(key)
        if (cache[key] !== undefined){
            output[cache[key]].push(strs[i]);

        } else {
            cache[key] = output.length;
            output.push([strs[i]])

        }
        //console.log(cache)
    }
    return output
}

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))

