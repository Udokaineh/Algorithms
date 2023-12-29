// 1) Write a function in JavaScript that takes an array of numbers as input and returns the maximum number in the array.

function maxNum(arr) {
    let maxNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

const numbers = [12, 5, 8, 17, 3, 21, 6];
const result = maxNum(numbers);
console.log(result); // Output: 21


// 2) Write a function in JavaScript that takes an array as input and returns a new array with the elements reversed.
function reverseArr(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArr(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// 3) Write a function in JavaScript that takes an array of numbers as input and returns the sum of all the numbers in the array.
function FindSumArray(arr) {
    let summedArray = 0
    for (let i = 0; i < arr.length; i++) {
        summedArray += arr[i]
    }
    return summedArray
}

const number = [1, 2, 3, 4, 5];
const newResult = FindSumArray(number);
console.log(newResult); // Output: 15

// 4) Write a function in JavaScript that takes an array of numbers as input and returns the average (mean) of those numbers.
function calculateAverage(arr) {
    if (arr.length === 0) {
        return undefined; // Handle the case when the array is empty
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length
    return average
}

const numberss = [1, 2, 3, 4, 5];
const resultt = calculateAverage(numberss);
console.log(resultt); // Output: 3

// 5) Write a function in JavaScript that takes a non-negative integer as input and returns its factorial. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

function findFactorial(n) {
    if (n < 0) {
        return undefined
    }
    if (n === 0 || n === 1) {
        return 1 // the factorial of 0 and 1 is 1
    }

    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}

const num = 5;
const results = findFactorial(num);
console.log(results); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// 6)If you have an array n and you want to calculate the factorial

function findFactorialUsingArray(arr) {
    if (arr.length === 0) {
        return undefined
    }
    let product = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return undefined
        }
        let factorial = 1
        for ( let j = 1; j <= arr[i]; j++){
            factorial *= j
        }
        product *= factorial
    }
    return product
}

// Example usage:
const numbersss = [2, 3, 4];
const resulttt = findFactorialUsingArray(numbersss);
console.log(resulttt); // Output: 288 (2! * 3! * 4! = 2 * 6 * 24 = 288)


// 7) Write a function in JavaScript that takes two positive integers as input and returns their greatest common divisor (GCD) also called Highest Common Fcator (HCF).

function findTheGCD(a, b){
    if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return undefined
    }

    while ( b !== 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}

const num1 = 48;
const num2 = 18;
const gcdResult = findTheGCD(num1, num2);
console.log(gcdResult); // Output: 6