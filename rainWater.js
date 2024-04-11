
var trap = function(height, start = 0) {

    let units = 0;
    
    let end = 0;

    function inner(start){

        if (end > height.length) return units;
    
        if (height[start++] !== undefined &&
            height[start++] < height[start]){
                end += 1;
                inner(start++)
                Math.abs(end - start)
            }
        
        else if (height[start++] !== undefined &&
            height[start++] > height[start]){
                end += 1
                return inner(start++)
            }

    }
     
};
