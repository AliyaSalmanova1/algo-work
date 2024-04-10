var shortestBridge = function(grid) {
    //arrays for positions in grid for first island land and second island land
    const firstIsl = [];
    const secIsl = [];

    //var to check which island we're at
    let atFirstIsl = true;
    
    //loop through grid to find start of first and second islands 
    for (let y = 0; y < grid.length; y++){
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x] === 1 && atFirstIsl){
                atFirstIsl = false;
                //findRestOfIsland func will find the rest of the land of the island
                findRestOfIsland(x, y, 'F', firstIsl);
            } else if (grid[y][x] === 1){
                findRestOfIsland(x, y, 'S', secIsl);
            }
        }
    }
    function findRestOfIsland(x, y, letter, island){
        //if position holds 1, this is land of the island
        if (grid[y][x] === 1){
            grid[y][x] = letter;
            if (island) island.push({x,y})
        } else return;

        //check if sides aren't water, and if not invoke func recursively,
        //passing in new position
        if (grid[y][x-1] && grid[y][x-1] !== 0){
            findRestOfIsland(x-1, y, letter, island)
        }
        if (grid[y][x+1] && grid[y][x+1] !== 0){
            findRestOfIsland(x+1, y, letter, island)
        }
        if (grid[y-1] && grid[y-1][x] !== 0){
            findRestOfIsland(x, y-1, letter, island)
        }
        if (grid[y+1] && grid[y+1][x] !== 0){
            findRestOfIsland(x, y+1, letter, island)
        }
    }
    
    let leastNumOfIslands = Infinity;

    //loop through first island and compare the distance between each 
    //piece of land to the pieces of land in second island
    for (let i = 0; i < firstIsl.length; i++){
        
        for (let j = 0; j < secIsl.length; j++){
            const distance = Math.abs(firstIsl[i].x - secIsl[j].x) + Math.abs(firstIsl[i].y - secIsl[j].y) - 1;
            //reassign leastNumOfIslands if distance between these lands are smaller
            if (distance < leastNumOfIslands) leastNumOfIslands = distance;
        }

    }

    return leastNumOfIslands;

  };

  console.log(shortestBridge([
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
]));