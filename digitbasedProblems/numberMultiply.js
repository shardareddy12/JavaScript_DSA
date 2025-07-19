/*
Problem: Product of Digits
Write a program that calculates the product of all digits of 
a given positive integer.

Input: A single positive integer between 1 and 99999
Output: A single integer representing the product of the digits

Examples:

Input: 123  (1*2*3)
Output: 6

Input: 456 (4*5*6)
Output: 120

*/


function numberMultiply(n){
    product = 1
    while (n>0){
        product = product * (n%10)
        n = Math.floor(n/10)
    }

    return product
}

console.log(numberMultiply(1234))