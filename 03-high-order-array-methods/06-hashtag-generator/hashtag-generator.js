function generateHashtag(string) {
    if (string.length === 0 || string.length > 140) {
        return false;
    }

    const newString = string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

    return `#${newString}`;
}

module.exports = generateHashtag;

// function generateHashtag(str) {
//     const hashtag = str.split(" ").reduce(function (tag, word) {
//         return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     }, "#");

//     return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
// }
