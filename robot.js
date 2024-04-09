var isRobotBounded = function(instructions) {
    //storage: [direction to the left, direction to right, x axis, y axis]
    const directionPointers = {
        'N': ['W', 'E', 0, 1],
        'E': ['N', 'S', 1, 0],
        'S': ['E', 'W', 0, -1],
        'W': ['S', 'N', -1, 0],
    }
    //initial position (x, y), initial direction
    const position = [0,0];
    let direction = 'N';
    //loop 
    for (const order of instructions){
        if (order === 'G'){
            //change x and y axis
            position[0] += directionPointers[direction][2];
            position[1] += directionPointers[direction][3];
        }
        //turn direction left or right
        else if (order === 'L') direction = directionPointers[direction][0] 
        else if (order === 'R') direction = directionPointers[direction][1] 
    }
    //if we got to a position of 0,0 we made a circle! yay!
    // or if we changed the direction, that means we will make a circle! yay!
    return (position[0] === 0 && position[1] === 0) || direction !== 'N';
      
  };

  console.log(isRobotBounded("GLRLLGLL"));

