function twoSum(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;

    while (p2 > p1) {
        console.log(numbers[p1], numbers[p2])
        const sum = numbers[p2] + numbers[p1]
        if (sum === target) return [p1 + 1, p2 + 1]
        else if (sum > target) p2--;
        else p1++;
    }
}

console.log(twoSum([1,2,3,4], 3))