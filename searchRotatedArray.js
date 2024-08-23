var search = function(nums, target) {

    

    function toRecurse(numsCopy, indexOffset){
        
        const midIndex = Math.floor(numsCopy.length/2)
        const actualIndex = indexOffset + midIndex

        console.log(numsCopy, indexOffset, midIndex)

        if (numsCopy[midIndex] === target) {
     
            return actualIndex;
        }
        else if (numsCopy.length === 1 || numsCopy.length === 0) {
 
            return -1;
        }
        else {
            //check if target is in left side
            if (numsCopy[0] <= numsCopy[midIndex] && numsCopy[0] <= target && target < numsCopy[midIndex] ||
            numsCopy[0] > numsCopy[midIndex] && (target <= numsCopy[midIndex] || target > numsCopy[numsCopy.length-1])){
         
                return toRecurse(numsCopy.slice(0, midIndex), indexOffset)
            }
            else {
               
                return toRecurse(numsCopy.slice(midIndex+1), actualIndex+1)
            }
        }
    }

    const answer = toRecurse(nums.slice(), 0)
  
    return answer
    
};

console.log(search([7,0,1,2,4,5,6], 4))

