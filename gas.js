
var canCompleteCircuit = function(gas, cost) {
  
    let gasSort = gas.slice();
    const sortedIndexes = [];
    
    while (gasSort.length > 0){
      const findMax = Math.max(...gasSort);
      const indexOfMax = gas.indexOf(findMax);
      sortedIndexes.push(indexOfMax);
      const toSlice = gasSort.indexOf(findMax);

      gasSort = gasSort.slice(0,toSlice).concat(gasSort.slice(toSlice+1));

    }
    
    for (let i = 0; i < sortedIndexes.length; i++){
        let j = i
        while (j )
    }

   
      
};
  
  console.log(canCompleteCircuit([1,2,3,4,5]))