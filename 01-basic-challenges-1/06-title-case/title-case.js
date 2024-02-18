function titleCase(string) {
    let stringArray = string.split(" ");
    let newStringArray = [];

    stringArray.forEach((word) => {
        return newStringArray.push(word[0].toUpperCase() + word.slice(1));
    });

    return newStringArray.join(" ");
}

module.exports = titleCase;

// function titleCase( str ) {
//     let arrStr = str.split(' ');
//     const result = arrStr.reduce((words, word) => {
//     return words += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
//     }, "")
//     // remove last character:
//     return result.slice( 0, -1);
// }
//    Or
// function titleCase (str) {
//     const words = str.toLowerCase().split(' ');
//     const wordsCapitalizeFirstLetter = words.map((word) => {}
//     word.charAt(0).toUpperCase() + word.slice(1))};
//     return wordsCapitalizeFirstLetter.join(' ');
// }
