var findContentChildren = function(g, s) {
    const childRequests = g.sort((a,b) => a-b).slice();
    const cookieSize = s.sort((a,b) => a-b).slice()

    console.log(childRequests, cookieSize)


    for (let i = childRequests.length-1; i >= 0; i--){
        if (cookieSize[cookieSize.length-1] >= childRequests[i]){
            cookieSize.pop();
        }
        
        console.log(childRequests[i], cookieSize)
    }


    console.log(s.length, cookieSize.length)
    return s.length - cookieSize.length;


    
};

console.log(findContentChildren([1,2,3], [1,1]))
