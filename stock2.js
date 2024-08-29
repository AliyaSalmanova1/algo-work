var maxProfit = function(prices) {

    let currMax = prices[prices.length-1]

    let maxProf = 0;

    for (let i = prices.length-1; i >= 0; i--){
        if (prices[i] > currMax) {
            currMax = prices[i]
        }

        const currProf = 0 - prices[i] + currMax;

        if (currProf > maxProf) {
            maxProf = currProf;

        }
    }



    return maxProf;
    
};

console.log(maxProfit([7,1,5,3,6,4]))