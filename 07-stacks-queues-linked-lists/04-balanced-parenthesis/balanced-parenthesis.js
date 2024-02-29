const Stack = require("./stack");

// function balancedParenthesis(str) {
//     const stack = new Stack();

//     stack.push(str);

//     let openParenthesis = 0;
//     let closeParenthesis = 0;

//     const string = stack.stack.toString();
//     console.log(string);

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "(") {
//             openParenthesis++;
//         } else if (string[i] === ")") {
//             closeParenthesis++;
//         }
//     }

//     return openParenthesis === closeParenthesis;
// }

module.exports = balancedParenthesis;
function balancedParenthesis(str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(str[i]);
        } else if (str[i] === ")") {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}
