function maxDepth(root) {

    let maxDepth = 0;

    function dfs(node, i){
        console.log(node, i)
        if (node !== null) i++
        else return maxDepth
        if (i > maxDepth) maxDepth = i
        if (node.left !== null){
            dfs(node.left, i)
        }
        if (node.right !== null){
            dfs(node.right, i)
        }
    }

    dfs(root, 0)

    return maxDepth
    
}