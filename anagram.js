function groupAnagrams(strs) {
    const output = [];
    const cache = {};

    for (let i = 0; i < strs.length; i++){
        const currStr = strs[i]
        const sorted = currStr.split("").sort().join("");
        if (cache[sorted]){
            output[cache[sorted]].push(strs[i]);

        } else {
            cache[sorted] = output.length;
            output.push([sorted])

        }
        console.log(cache)
    }
    return output
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))

