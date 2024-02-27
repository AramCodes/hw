function phoneNumberDirectory(strArr) {
    const directory = new Map();

    strArr.forEach((str) => {
        const name = str.split(":")[0];
        const phoneNumber = str.split(":")[1];
        directory.set(name, phoneNumber);
    });

    return directory;
}

module.exports = phoneNumberDirectory;

// function phoneNumberDirectory(strArr) {
//     const directory = new Map();

//     strArr.forEach((str) => {
//         const [name, phoneNumber] = str.split(':');
//         directory.set(name, phoneNumber);
//     })

//     return directory;
// }

// function phoneNumberDirectory(strArr) {
//     const directory = new Map();

//     strArr.forEach((str) => {
//         const name = str.split(/\W+/);
//         const phone = str.split(/\[^0-9]/);

//         console.log(name);
//         console.log(phone);

//         directory.set(name, phone);
//     });

//     return directory;
// }

// function phoneNumberDirectory(phoneNumbers) {
//     const directory = new Map();
//     for (const entry of phoneNumbers) {
//       const [name, phoneNumber] = entry.split(':');
//       directory.set(name, phoneNumber);
//     }

//     return directory;
// }
