var removeDuplicates2 = function(nums) {
    if (nums.length < 1) return 0;

    let counter = 0;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] != nums[counter]){
            counter++;
            nums[counter] = nums[i];
        }
    }

    return counter+1;

};

console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));