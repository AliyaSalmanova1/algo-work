
// var rob = function(nums) {
  
//   let maxi = 0;
  
//   function idk(arr, currMax){
//     console.log(arr, currMax)
    
//     if (currMax > maxi) maxi = currMax;

//     if (arr.length === 0) return;
    
//     idk(arr.slice(2), currMax+arr[0]);
//     idk(arr.slice(3), currMax+arr[0])
    
//   }
  
//   idk(nums, 0);
//   idk(nums.slice(1), 0);
  
//   return maxi;
    
// };

// console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]));

// var rob = function(nums) {
  
//   let maxi = 0;
  
//   function idk(arr, ind, currMax){
//     console.log(arr, currMax)
    
//     if (currMax > maxi) maxi = currMax;

//     if (ind > arr.length) return currMax;
    
//     idk(arr, ind + 2, currMax+arr[ind]);
//     idk(arr, ind + 3, currMax+arr[ind])
    
//   }
  
//   idk(nums, 0, 0);
//   idk(nums, 1, 0);
  
//   return maxi;
    
// };

// var rob = function(nums) {
  
//   let maxi = 0;
//   const dp = {};

//   function idk(arr, ind, currMax){
//     console.log(ind, currMax)

//     if (currMax > maxi) maxi = currMax;

//     if (dp[ind]) {

//       if (dp[ind] > maxi) maxi = dp[ind];
//       return dp[ind]; 

//     } else {

//       if (ind + 3 >= arr.length) {
  
//         dp[ind + 3] = arr[ind+2]
//         return arr[ind+2];
//       } else if (ind + 4 >= arr.length) {
//         return Math.max(arr[ind+2], arr[ind+3]);
//       } else {

//         dp[ind] = Math.max(idk(arr, ind + 2, currMax+arr[ind]), idk(arr, ind + 3, currMax+arr[ind]));
//       }
//     }
//   }
  
//   idk(nums, 0, 0);
//   idk(nums, 1, 0);
  
//   return maxi;  
// };


// var rob = function(nums) {
  
//   let maxi = 0;
//   const dp = {}

//   let curr;
  
//   function idk(arr, ind){
//     console.log(arr, ind, maxi, dp)
    
//     if (dp[arr[ind]]) return dp[arr[ind]];

//     else {

//       if (ind >= arr.length - 2) {
//         dp[ind] = ind >= arr.length ? 0 : arr[ind];
//         if (dp[ind] > maxi) maxi = dp[ind];
//         return dp[ind];
//       }
    
//       curr = arr[ind] + Math.max(idk(arr, ind + 2), idk(arr, ind + 3));
      
//       dp[ind] = curr;

//       if (curr > maxi) maxi = curr;

//       return curr;

//     }
    
//   }
  
//   idk(nums, 0);
//   idk(nums, 1);
  
//   return maxi;
    
// };

// var rob = function(nums) {
//   let maximum = 0;
//   const dp = {};

//   function helper(ind) {
//     console.log(nums, ind, maximum, dp);
//     //edge case
//     if (ind >= nums.length) {
//       return 0;
//     }
       //returning cached values
//     if (dp[ind] !== undefined) {
//       return dp[ind];
//     }

       //base case
//     if (ind >= nums.length - 2) {
//       dp[ind] = Math.max(0, nums[ind]);
//       if (dp[ind] > maximum) maximum = dp[ind];
//       return dp[ind];
//     }
//     //recursive cases
//     const curr = nums[ind] + Math.max(helper(ind + 2), helper(ind + 3));

//     dp[ind] = curr;
//     //redefine the max
//     if (curr > maxi) maximum = curr;

//     return curr;
//   }
//   //helper function calls
//   helper(0);
//   helper(1);

//   return maximum;
// };

console.log(rob([2, 7, 9, 3, 1, 5]));


// function rob(nums){
//     //edge case
//     if (nums.length === 1) return nums[0];
  
//     const dp = [];
  
//     dp.push(nums[0]);
//     dp.push(Math.max(nums[0], nums[1]));
  
//     //loop and fill dp array.
//     for (let i = 2; i < nums.length; i++){
//       //compare previous loot with current loot 
//       dp.push(Math.max(dp[i-1], dp[i-2] + nums[i]));
//     }
     
    
//     return dp[nums.length-1];
  
//   }

function rob(nums){
  //edge case
  if (nums.length === 1) return nums[0];

  //helper func
  function bandit(loot1, loot2, currInd){
    if (currInd === nums.length) return loot2; 

    return bandit(loot2, Math.max(loot2, loot1+nums[currInd]), currInd+1);

  }
  return bandit(nums[0], Math.max(nums[0], nums[1]), 2);
}

console.log(rob([1,2,1,1]));

console.log(rob([2, 7, 9, 3, 1, 5]));

//dp = []
  
  