var getSum = function(a, b) {
  
    if ((a >= 0 && b >= 0) || (a <= 0 && b <= 0)){
        const array1 = new Array(Math.abs(a));
        const array2 = new Array(Math.abs(b));

        const arrayLength = array1.concat(array2).length
        if (a >= 0 && b >= 0) return arrayLength
        else {
            const arrayLengthStr = String(arrayLength);
            return Number("-" + arrayLengthStr);
        }
    }
    else {
        const absA = Math.abs(a)
        const absB = Math.abs(b)
        const smallerNum = Math.min(absA, absB);
        const biggerNum = Math.max(absA, absB);



        smallArray = new Array(smallerNum);
        bigArray = new Array(biggerNum);

        const arrayLength = bigArray.slice(smallerNum).length;

        if (biggerNum === absB && b < 0){
            const arrayLengthStr = String(arrayLength);
            return Number("-" + arrayLengthStr);

        }
        else return arrayLength;
    }
    
      
};

console.log(getSum(-2,5));

