function calculator(n1, n2, op) {
    if (op === "+") {
        return n1 + n2;
    } else if (op === "-") {
        return n1 - n2;
    } else if (op === "*") {
        return n1 * n2;
    } else if (op === "/") {
        return n1 / n2;
    } else {
        console.log("Invalid operation");
    }
}

module.exports = calculator;
