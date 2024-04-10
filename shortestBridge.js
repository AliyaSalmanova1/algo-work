// var shortestBridge = function(grid) {
  
//     const secIsl = [];
//     let atFirstIsl = true;
    
//     for (let y = 0; y < grid.length; y++){
//         for (let x = 0; x < grid[y].length; x++){
//             if (grid[y][x] === 1 && atFirstIsl){
//                 atFirstIsl = false;
//                 findRestOfIsland(x, y, 'F');
//             } else if (grid[y][x] === 1){
//                 findRestOfIsland(x, y, 'S', secIsl);
//             }
//         }
//     }
//     function findRestOfIsland(x, y, letter, island){
//         if (grid[y][x] === 1){
//             grid[y][x] = letter;
//             if (island) island.push({x,y})
//         } else return;
//         if (grid[y][x-1] && grid[y][x-1] !== 0){
//             findRestOfIsland(x-1, y, letter, island)
//         }
//         if (grid[y][x+1] && grid[y][x+1] !== 0){
//             findRestOfIsland(x+1, y, letter, island)
//         }
//         if (grid[y-1] && grid[y-1][x] !== 0){
//             findRestOfIsland(x, y-1, letter, island)
//         }
//         if (grid[y+1] && grid[y+1][x] !== 0){
//             findRestOfIsland(x, y+1, letter, island)
//         }
//     }
//     console.log('grid with fs and ss', grid, secIsl)

//     let leastNumOfIslands = Infinity;

//     function getToFirstIsland(gridCopy, x, y, bridgeLength){
//         console.log('copy', gridCopy, x, y, bridgeLength)
//         if (bridgeLength > leastNumOfIslands) return;
        

//         const newGrid = gridCopy.map(row => row.slice());
//         if (gridCopy[y][x] === 'F'){
//             if (bridgeLength < leastNumOfIslands) leastNumOfIslands = bridgeLength;
//             return;
//         } else if (newGrid[y][x] === 0){
//             newGrid[y][x] = 'B';
//             bridgeLength++;
//         }
//         if ([0, 'F'].includes(newGrid[y][x-1])){
//             getToFirstIsland(newGrid, x-1, y, bridgeLength)
//         }
//         if ([0, 'F'].includes(grid[y][x+1])){
//             getToFirstIsland(newGrid, x+1, y, bridgeLength)
//         }
//         if (newGrid[y-1] && [0, 'F'].includes(newGrid[y-1][x])){
//             console.log('here', newGrid)
//             getToFirstIsland(newGrid, x, y-1, bridgeLength)
//         }
//         if (newGrid[y+1] && [0, 'F'].includes(newGrid[y+1][x])){
//             getToFirstIsland(newGrid, x, y+1, bridgeLength)
//         }
//     }


//     for (let i = 0; i < secIsl.length; i++){
//         getToFirstIsland(grid.slice(), secIsl[i].x, secIsl[i].y, 0);
//     }
    

//     return leastNumOfIslands;

//   };

var shortestBridge = function(grid) {
  
    let firstIsl = [];
    let doBreak = true;
    //x's and y's in order to get to surrounding land
    const indexes = [[0,-1],[0,1],[-1,0],[1,0]];
    
    //loop through grid to find start of first island
    for (let y = 0; y < grid.length; y++){
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x] === 1){
                //once you found start of island, find rest of land and break from loops
                findRestOfIsland(x, y);
                doBreak = !doBreak;
                break;
            }
        }
        if (!doBreak) break;
    }

    function findRestOfIsland(x, y, letter){
        //if current position is 1, change land piece to 'F', meaning first island
        if (grid[y][x] === 1){
            grid[y][x] = 'F';
            firstIsl.push({x,y, distance:0})
        } else return;
        //check surrounding positions in grid, if they could be land recursively invoke func
        for (let [newX, newY] of indexes){
            if (grid[y+newY] && grid[y+newY][x+newX] !== 0){
                findRestOfIsland(x+newX, y+newY, letter);
            }
        }
    }
    
    //variables:
    let distance = 0; //distance between islands
    let currLevel = firstIsl //currLevel is rn the firstIsland, but later will be bridges
    let bridge = []; 

    while (currLevel.length > 0){
        
        //loop through current level
        for (let i = 0; i < currLevel.length; i ++){
            const x = currLevel[i].x, y = currLevel[i].y;
            
            //loop through indexes in order to find 0s arround current level
            //this way we will find the next bridge
            for (let [newX, newY] of indexes){
                if (grid[y+newY] && [0,1].includes(grid[y+newY][x+newX])){
                    //if we get to the second island (aka untouched land that is still marked 1)
                    if (grid[y+newY][x+newX] === 1) return distance;
                    //if we see water, we have a new bridge piece
                    if (grid[y+newY][x+newX] === 0) grid[y+newY][x+newX]= 'B';
                    bridge.push({x: x+newX, y: y+newY});
                }
            }
        }
        //change curr level, distances is now further, and we get a new bridge section
        currLevel = bridge;
        distance++;
        bridge = [];
    }

    return -1;

};


console.log(shortestBridge([
    [0,1,0],
    [0,0,0],
    [0,0,1]
]));