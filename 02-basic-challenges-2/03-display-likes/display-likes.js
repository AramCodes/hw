function displayLikes(namesArray) {
    const length = namesArray.length;

    if (length === 0) {
        return "no one likes this";
    } else if (length === 1) {
        return `${namesArray[0]} likes this`;
    } else if (length === 2) {
        return `${namesArray[0]} and ${namesArray[1]} like this`;
    } else if (length === 3) {
        return `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`;
    } else {
        return `${namesArray[0]}, ${namesArray[1]} and ${
            length - 2
        } others like this`;
    }
}

module.exports = displayLikes;

// function displayLikes(names) {
//     const [first, second, third] = names;
//     const total = names.length;

//     return total === 0 ? 'no one likes this' :
//     total === 1 ? `${first} likes this` :
//     total === 2 ? `${first} and ${second} like this` :
//     total === 3 ? `${first}, ${second} and ${third} like this` :
//     `${first}, ${second} and ${total - 2} others like this`;
// }
