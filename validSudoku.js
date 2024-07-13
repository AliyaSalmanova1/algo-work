var isValidSudoku = function(board) {

    for (let v = 0; v < 9; v ++){
        const vCache = {}
        const hCache = {}
        for (let h = 0; h < 9; h++){

            const vNum = board[v][h]
            const hNum = board[h][v]

            if (Number(vNum)) {
                if (vCache.hasOwnProperty(vNum)) return false
                else vCache[vNum] = true;
            }
            if (Number(hNum)) {
                if (hCache.hasOwnProperty(hNum)) return false
                else hCache[hNum] = true;
            }

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
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]))