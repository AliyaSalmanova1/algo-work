function maxArea(heights) {
    let l = 0;
    let r = heights.length-1;
    let currMax = 0;

    while (l < r){
        console.log(heights[l], heights[r], currMax, l, r)
        const difference = r-l;
        currMax = Math.max(currMax, difference * (Math.min(heights[l], heights[r])));
        if (heights[r] > heights[l]) l++;
        else r--;
    }

    return currMax;
}

console.log(maxArea([1,7,2,5,4,7,3,6]))