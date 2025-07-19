/*
Problem: Sum of First and Last Digit
Calculate the sum of the first and last digit of a number.

Input: A positive integer
Output: Sum of the first and last digits

Examples:

Input: 1234
Output: 5

*/

function sumFirstLast(n){
    let numlist = n.toString()
    return (parseInt(numlist[0])+parseInt(numlist[numlist.length-1]))
}

console.log(sumFirstLast(12349))