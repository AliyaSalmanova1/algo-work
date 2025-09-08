

var removeDuplicates = function(nums) {
    let set = new Set();
    
    let counter = 0; 
    
    for (let i = 0; i < nums.length; i++){
        if (set.has(nums[i])){

            nums[i] = '_';
            
        }else{
            set.add(nums[i]);

            nums[counter] = nums[i];
            counter++;
            if (counter != i && i != 0) nums[i] = '_';
            
        }
    }
    
    return nums;
    
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));