function subsets(nums) {
    const newArray = [];

    function dfs(i, array){

        if (i >= nums.length) {
            
            const secNewArr = array.slice()
            newArray.push(secNewArr)
            return;
        }

        const firstNewArr = array.slice()
        firstNewArr.push(nums[i])
        //newArray.push(firstNewArr)
        
        dfs(i+1,firstNewArr)
        dfs(i+1, array)

    }

    dfs(0, [])
    return newArray;
}

console.log(subsets([1,2,3]))