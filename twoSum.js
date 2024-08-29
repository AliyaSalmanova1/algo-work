function twoSum(numbers, target) {
    const hashMap = {};

    for (let i = 0; i < numbers.length; i++){
        

        const difference = target - numbers[i];

        if (hashMap[numbers[i]] !== undefined) return [hashMap[numbers[i]] + 1, i+1]

        else hashMap[difference] = i;
    }
}

console.log(twoSum([1,2,3,4], 3))