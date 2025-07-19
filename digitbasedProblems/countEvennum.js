/*
Problem: Count of Even Digits
Count the number of even digits in the given number.

Input: A positive integer (1 to 99999)

Output: An integer representing how many digits are even

Examples:

Input: 2468 
Output: 4

Input: 1234 (2,4)
Output: 2

 */

function countEvennumber(n){
    let count = 0
    while(n>0){
        number = n%10
        if (number%2==0){
            count++
        }
        n=Math.floor(n/10)
    }
    return count
}

console.log(countEvennumber(2468))