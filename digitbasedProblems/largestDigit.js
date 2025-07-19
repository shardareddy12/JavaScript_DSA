/*
Problem: Largest Digit
Return the largest digit in the given number.

Input: A positive integer
Output: The largest digit

Examples:

Input: 9831
Output: 9

*/

function largestDigit(n){
    let largeNum = 0
    while(n>0){
        if (n%10>largeNum){
            largeNum = n%10
        }
        n = Math.floor(n/10)
    }

    return largeNum
}

console.log(largestDigit(732))

//--------------Solution 2---------------

function largestDigit(n){
        return Math.max(...n.toString().split('').map(Number));
    }