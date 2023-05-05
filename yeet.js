const isAlive = true

alert(isAlive)

let count = 0

count = 2

console.log(count)

function addDivide(n1, n2, n3, n4) {
    return (n1 + n2 + n3) / n4
}

addDivide(2,3,4,5)

function yep(n1, n2) {
    console.log(n1 ** n2)
}

yep(2,2)

function (bool, string) {
    if (bool === true) {                // b ? alert(str) : console.log(str)
        alert(string)
    }else if (b === false){
        console.log(string)
    }
}

let array = ["New Jack City", "IP Man", "Megan"]

let firstMovie = array[0]

let length = array.length

let lastMovie = array[array.length - 1]




const h2DOM = document.querySelector('h2') 
let movieTitles = ["Megan", "Knock at the cabin", "IP Man", "War", "Fast & the Furious", "American Pie"]

h2DOM.forEach( (movie, idx )=> {
    h2DOM.textContent += `${idx}. ${movie} `
});

let numbers = [1, 4, 5, 12, 9, 10, 18, 25]

numbers.forEach((number, i)=> {
   numbers[i] = number + 3                                                //let newNumber = number + 3 //numbers.push(newNumber)
})

numbers.forEach(number => {                            //let sum = 0
    let sum += number                                  //for(let i = 0; i < numbers.length; i++) {
    console.log(sum/numbers.length)                                //sum += numbers[i]}
})                                                     //console.log sum/numbers.length         

let food = " "
food = pizza
alert("food")

const str = "string"
alert(str.charAt(1))

function divideMultiply(n1, n2, n3) {
    let ans = ((n1/n2) * n3).toFixed(2)
    alert(ans)
}

divideMultiply(2,3,4)

function cubeRoot(n1) {
    console.log(n1 ** n1 ** n1)
}

cubeRoot(2)

function summerMonthCheck(month) {
    let lcMonth = month.toLowerCase()
    if (lcMonth === "july" || lcMonth === "june" || lcMonth === "august") {
        alert("YAY")
    }else {
        alert("BOOO")
    }
}

summerMonthCheck("july")

function skip5(num) {
    for( let i = 1; i <= num; i++) {
    if (i%5 !== 0) {
        console.log(i)
    }else {
        
    }
}  
}

skip5(100)

function arrayHandler(arr) {
    if (arr[0] < arr[arr.length -1]) {
        alert("Hi")
    }else if (arr[0] > arr[arr.length -1]) {
        alert("Bye")
    }else {
        alert("We close in an hour")
    }
}

arrayHandler([1, 2, 3, 4, 5])
arrayHandler([5, 4, 3, 2, 1])
arrayHandler([5, 4, 3, 2, 5])

function multiArray(arr) {
    let product = 1
    arr.forEach((item, i) => {
        product*= item
    })
}

multiArray([1, 2, 3, 4, 5])


function newArray(arr) {
    let newArray = []
    arr.forEach(num, i) {
        if (num % 2 === 0) {
            newArray.push(num)
        }
    }

    return newArray
}

let favHoliday; 

favHoliday = "Christmas"

console.log(favHoliday.toUpperCase())

const string = "Gilgamesh"

alert(string.slice(-3))

function Subtract (n1,n2,n3,n4,n5) {
    alert(Math.abs(100 - n1- n2-n3-n4-n5) )
}

Subtract(1, 5, 4, 10, 20)

function lowest(n1, n2,n3) {                             //math.min and math.max
    if(n1 < n2 & n1 < n3) {
        let lowest = n1
    }else if (n2 < n1 & n2 < n3) {
        let lowest = n2
    }else if (n3 < n1 & n3 < n2) {
        let lowest = n3
    }

    if(n1 > n2 & n1 > n3) {
        let highest = n1
    }else if (n2 > n1 & n2 > n3) {
        let highest = n2
    }else if (n3 > n1 & n3 > n2) {
        let highest = n3
    }

    console.log(lowest, highest)
}
 
lowest(1, 4, 79)


function headOrTails() {
    let flip = Math.floor(Math.random() * 2 ) +1
    if(flip === 1) {
        return "heads"
    }else if ( flip === 2) {
        return "tails"
    }
}

headOrTails()

function multiFlip(num) {
    for(let i= 1; i <=num ; i++) {
        let result = headOrTails()
        console.log(result)
    }
}

multiFlip(15)

let tvShows = ["Power rangers", "Married at First Sight", "Simpsons", "Deathnote"]

tvShows.forEach(show, num){
    console.log(`${num}. ${show}`)
} 

const arrayOfNumbers = [2,5,6,91,52]

function newArr() {
 arrayOfNumbers.filter(num => num % 2 === 0) {
        console.log(num)
    }
}

function secondLowAndHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

let stopWatch = {}

stopWatch.color ="black"
stopWatch.brand = "Nike"
stopWatch.shape = "circle"
stopWatch.size = "large"

stopWatch.start = function() {
    console.log("starting")
}

stopWatch.stop = function() {
    console.log("stopping")
}

stopWatch.reset = function() {
    console.log("reseting")
}

let favDrink = "Grape Soda"
console.log(favDrink)

let multiString = "red is for apple and green is for apple"             //console.log(multiString.search("apple"))
multiString.filter((word)=> return word === "apple")

function rps() {
    let result = Math.floor(Math.random())
    if (result < .33) {
        return "rock"
    }else if (result < .67) {
        return "paper"
    }else {
        return "scissors"
    }
}

function takesIn(choice) {
    let botsChoice = rps()
    if (choice === "rock" && botsChoice === "scissors") {
        console.log("you won")
    }else if (choice === "paper" && botsChoice === "rock") {
        console.log("you won")
    }else if (choice === "scissors" && botsChoice === "paper" ) {                     //choice === botsChoice
        console.log("you won")
    }else if (choice === "paper" && botsChoice === "paper") {
        console.log("itza tie")
    }else if (choice === "rock" && botsChoice === "rock") {
        console.log("itza tie")
    }else if (choice === "scissors" && botsChoice === "scissors") {
        console.log("itza tie")
    }else  {
            console.log("you got beat by a bot")
        }
    }


function playGame(arr) {
    arr.forEach((choice)=> { 
        takesIn(choice)
    })
}

playGame(["rock","paper", "paper"])

let numNum = [2, 333, 9,811,9]
let sum = numNum.reduce((acc, cur) => acc + cur,0)

let sentence = "I am a jr. dev with about a year of experience"
alert(sentence.endsWith("?"))

let sentence1 = "I am a jr. dev with about 1 year of experience, so I am looking for a position for jr. dev"    
console.log(sentence1.replaceAll("jr. dev", "software engineer"))

let brandNewArray = arr.map(num => num**2)

function unoReverse() {
    console.log(str.split("").reverse().join(""))
}

function palindromeCheck (str) {
    if(str = str.split("").reverse().join("")){
        alert("Palindrome")
    }else {
        alert("Not a Palindrome")
    }
}

fetch("https://dog.ceo/api/breeds/image/random")          //dog api
.then(res => res.json())
.then(data => {
    //what to do with data
})
.catch(err => {
    console.log(`error ${err}`)
})

fetch("https://wwww.thecocktaildb.com/api/json/v1/1/search.php?s=()")          //cocktail api
.then(res => res.json())
.then(data => {
    //what to do with data
})
.catch(err => {
    console.log(`error ${err}`)
})