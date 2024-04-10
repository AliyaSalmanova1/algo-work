var isHappy = function(n) {
  
    function calculateSum(N){
      let nString = String(N);
      let result = 0
      for (let i = 0; i < nString.length; i++){
        let numberI = Number(nString[i]);
        result += numberI*numberI;
      }
      return result; 
    }
    
    n = calculateSum(n)

    const house = new Set();
    
    while (n !== 1){
      console.log(n);
      n = calculateSum(n);
      if (house.has(n)) return false
      else (house.add(n))
    }
      
    return true;
      
  };
  
  console.log(isHappy(14));