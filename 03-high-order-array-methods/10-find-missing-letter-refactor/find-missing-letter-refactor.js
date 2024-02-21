function findMissingLetter(arr) {
    let start = arr[0].charCodeAt(0);

    const missingCharCode = arr.reduce((missing, char) => {
        const current = char.charCodeAt(0);

        if (current - start > 1 && missing === null) {
            missing = start + 1;
        }

        start = current;
        return missing;
    }, null);

    return missingCharCode ? String.fromCharCode(missingCharCode) : "";
}

module.exports = findMissingLetter;
