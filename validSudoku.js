var isValidSudoku = function(board) {

    for (let v = 0; v < board.length; v ++){
        const cache = {}
        for (let h = 0; h < board[v].length; h++){

            const num = board[v][h]
            if (!Number(num)) continue;
            if (cache.hasOwnProperty(num)) return false;
            else cache[num] = true;

        }
    }

    for (let h = 0; h < board[0].length; h++){
        const cache = {}
        for (let v = 0; v < board.length; v++){
            const num = board[v][h]
            
            if (!Number(num)) continue;
            if (cache.hasOwnProperty(num)) return false;
            else cache[num] = true;

        }
    }

    for (let v = 0; v < board.length; v+=3){
        for (let h = 0; h < board.length; h+=3){
            const cache = {}
            for (let ver = v; ver < v+3; ver++){
                
                for (let hor = h; hor < h+3; hor++){
                    
                    const num = board[ver][hor]
                    if (!Number(num)) continue;
                    if (cache.hasOwnProperty(num)) return false;
                    else cache[num] = true;
        
                }
            }

        }
    }
    return true
};

console.log(isValidSudoku([
["7",".",".",".","4",".",".",".","."],
[".",".",".","8","6","5",".",".","."],
[".","1",".","2",".",".",".",".","."],
[".",".",".",".",".","9",".",".","."],
[".",".",".",".","5",".","5",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".","2",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]
]))