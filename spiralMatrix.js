// var spiralOrder = function(matrix, xy = [0,0], horRightDown = [true, true, true], newArr = []) {
//     let x = xy[0]
//     let y = xy[1]


//     if (matrix[y] === undefined || matrix[y][x] === undefined || matrix[y][x] === 'V') return newArr;
    

//     if (horRightDown[0]){
        

//         while (x < matrix[y].length && x >= 0){
//             if (matrix[y][x] === 'V') break;

//             newArr.push(matrix[y][x])
            
//             matrix[y][x] = 'V' 
//             if (horRightDown[1]) x++;
//             else if (!horRightDown[1]) x--;
//         }
//         if (horRightDown[1]) x--;
//         else x++;
      
//         xy[0] = x;
//         horRightDown[0] = !horRightDown[0];
//         horRightDown[1] = !horRightDown[1];
//         if (horRightDown[2]) y++;
//         else y--;
//         xy[1] = y;

//         return spiralOrder(matrix, xy, horRightDown, newArr)

//     }
//     else {

        
//         while (y < matrix.length && y >= 0){
//             if (matrix[y][x] === 'V') break;

//             newArr.push(matrix[y][x])
            
//             matrix[y][x] = 'V' 
//             if (horRightDown[2]) y++;
//             else if (!horRightDown[2]) y--;
//         }
//         if (horRightDown[2]) y--;
//         else y++;
//         xy[1] = y;
//         horRightDown[0] = !horRightDown[0];
//         horRightDown[2] = !horRightDown[2];
//         if (horRightDown[1]) x++;
//         else x--;
//         xy[0] = x;

//         return spiralOrder(matrix, xy, horRightDown, newArr)

//     }


// };

var spiralOrder = function(matrix, xy = [0,0], horRightDown = [true, true, true], newArr = []) {
    let x = xy[0]
    let y = xy[1]

    console.log(matrix)


    if (matrix[y] === undefined || matrix[y][x] === undefined || matrix[y][x] === 'V') return newArr;
    
    while ((horRightDown[0] && x < matrix[y].length && x >= 0)
    || (!horRightDown[0] && y < matrix.length && y >= 0)){
        console.log('here', x, y)
        if (matrix[y][x] === 'V') break;

        newArr.push(matrix[y][x])
        
        matrix[y][x] = 'V' 

        if (horRightDown[0] && horRightDown[1]) x++;
        else if (horRightDown[0] && !horRightDown[1]) x--;
        else if (horRightDown[2]) y++;
        else y--;
    }
    
    if (horRightDown[0]) {
        horRightDown[1] = !horRightDown[1];
        if (horRightDown[2]) y++;
        else y--;
        xy[1] = y;
    }
    else {
        horRightDown[2] = !horRightDown[2];
        if (horRightDown[1]) x++;
        else x--;
        xy[0] = x;
    }
    horRightDown[0] = !horRightDown[0];
    
    return spiralOrder(matrix, xy, horRightDown, newArr)

}


console.log(spiralOrder([[2,5],[8,4],[0,-1]]))