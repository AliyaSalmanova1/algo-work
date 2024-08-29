var maxProfit = function(prices) {
    const hashMap = {};

    let currMax = prices[prices.length-1]

    let maxProf = 0;

    for (let i = prices.length-1; i >= 0; i--){
        if (prices[i] > currMax) {
            currMax = prices[i]
        }
        hashMap[i] = currMax;
    }

    console.log(hashMap)

    for (let i = 0; i < prices.length; i++){
        const currProf = 0 - prices[i] + hashMap[i]

        console.log(currProf)
        if (0 - prices[i] + hashMap[i] > maxProf) {
            maxProf = currProf;

        }
    }

    return maxProf;
    
};

console.log(maxProfit([1,2]))