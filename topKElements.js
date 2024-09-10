function topKFrequent(nums, k) {
    const frequencies = {};

    const buckets = Array.from({ length: nums.length }, () => []);

    for (let num of nums){
        if (frequencies[num] !== undefined){
            frequencies[num]++;
        } else {
            frequencies[num] = 1;
        }
    }

    for (let el in frequencies){
        buckets[frequencies[el]-1].push(Number(el))
    }

    console.log(buckets, frequencies)
    let elsSortedByFreqs  = []

    for (let bucket of buckets){
        elsSortedByFreqs = elsSortedByFreqs.concat(bucket)
    }

    return elsSortedByFreqs.slice(elsSortedByFreqs.length - k)

}

console.log(topKFrequent([7,7], 2))