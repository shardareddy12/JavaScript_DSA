/*
Problem: Is Palindrome Number
Check if the number reads the same backward and 
forward.

Input: A positive integer
Output: true if palindrome, otherwise false

Examples:

Input: 1221
Output: true

Input: 123
Output: false

*/

function palindromeNumber(n){
    let numlist = n.toString()

    return numlist === numlist.split('').reverse().join('');
}

console.log(palindromeNumber(1234321))