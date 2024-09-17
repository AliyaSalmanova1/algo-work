 function productExceptSelf(nums) {
    const forwards = Array(nums.length-1).fill(0);
    const backwards = Array(nums.length-1).fill(0);
    const results = Array(nums.length-1).fill(0);
    for (let i = 0; i < nums.length; i++){
        if (i === 0){
            forwards[i] = 1;
            backwards[nums.length-1-i] = 1;
        } else{
            forwards[i] = forwards[i-1] * nums[i-1];
            backwards[nums.length-1-i] = backwards[nums.length-i] * nums[nums.length-i];
        }
        results[i] = forwards[i] * backwards[i]
        results[nums.length-1-i] = forwards[nums.length-1-i] * backwards[nums.length-1-i]
        
    }

    //console.log(forwards, backwards)
    return results;

}

console.log(productExceptSelf([1,2,4,6]))