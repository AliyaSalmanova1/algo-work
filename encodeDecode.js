function encode(strs) {

    let encodedStr = "[";

    for (let str of strs){
        encodedStr += String(str.length);
        encodedStr += ',' 
    }

    encodedStr += "]"
    encodedStr += strs.join('');

    return encodedStr;
}

//console.log(encode(["neet","code","love","you"]))


function decode(str) {

    const closingBrackI = str.indexOf(']');
    const numbers = str.slice(1, closingBrackI).split(',');
    numbers.pop()

    //console.log(numbers)


    let actualStr = str.slice(closingBrackI+1);

    const decodedStr = numbers.map((lengthOfStr) => {
        const stringBit = actualStr.slice(0, Number(lengthOfStr));
        //console.log(stringBit)

        actualStr = actualStr.slice(lengthOfStr);
        return stringBit;

    })

    return decodedStr;


}

//console.log(decode("[4,4,4,3,]neetcodeloveyou"))
