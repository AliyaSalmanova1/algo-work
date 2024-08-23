const jumpGame = (nums) => {
    //destination index
    let destInd = nums.length - 1;

    for (let i = nums.length -1; i >=0; i--){
        if (i + nums[i] >= destInd) destInd = i;
    }

    if (destInd === 0) return true;
    else return false;

}
console.log(jumpGame([2,3,1,0,4]))
console.log(jumpGame([3,2,1,0,4]))