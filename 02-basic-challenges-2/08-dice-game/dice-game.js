function diceGameSimulation(number) {
    const simulatedResults = [];

    for (let i = 0; i < number; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();
        const sum = dice1 + dice2;

        let result = "";

        if (sum === 2) {
            result = "lose";
        } else if (sum === 3) {
            result = "lose";
        } else if (sum === 12) {
            result = "lose";
        } else if (sum === 7 || sum === 11) {
            result = "win";
        } else {
            result = "roll again";
        }

        simulatedResults.push({
            dice1,
            dice2,
            sum,
            result,
        });
    }
    return simulatedResults;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

module.exports = diceGameSimulation;
