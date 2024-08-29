var evalRPN = function(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++){

        if (!Number(tokens[i])){
            console.log(stack)

            let num2 = Number(stack.pop());
            let num1 = Number(stack.pop());
            
            if (tokens[i] === '+') stack.push(num1+num2);
            else if (tokens[i] === '-') stack.push(num1-num2);
            else if (tokens[i] === '*') stack.push(num1*num2);
            else stack.push(Math.floor(num1/num2));
        }else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[0];
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))