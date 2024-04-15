// function subsetSum(arr, tar){
//     if (tar === 0) return true;
//     else if (arr.length === 0) return false;

//     const newTarget = tar - arr[0];

//     return subsetSum(arr.slice(1), newTarget) || subsetSum(arr.slice(1), tar);

// }

// console.log(subsetSum([3,7,4,2], 5));
// console.log(subsetSum([3,34, 4, 12, 5, 12], 32));
// console.log(subsetSum([8, 2, 4, 12], 13));
// console.log(subsetSum([8, -2, 1, -3], 6));

// console.log(subsetSum([7,2,3], 0));


// const allSubsets = (nums, currArr = [], result = []) => {
//     if (nums.length === 0){
//       result.push(currArr.slice())
//     } else {
//       allSubsets(nums.slice(1), [...currArr, nums[0]], result)
//       allSubsets(nums.slice(1), currArr, result)
//     }
//     return result
//   }
  
//   console.log(allSubsets([1, 7, 4]))
