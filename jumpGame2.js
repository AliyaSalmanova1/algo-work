const canJump = (nums) => {
    //furthest index we can currently jump to
    let furthestInd = 0;
  
    for (let i = 0; i < nums.length-1; i++){
       if (nums[i] + i > furthestInd) furthestInd = nums[i] + i;
       
       console.log(furthestInd)
       if (furthestInd >= nums.length-1) return true;

    
  
    }
    return false;
  
}
console.log(canJump([3,2,1,0,4]))