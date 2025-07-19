/*
Smallest Digit
Return the smallest digit in the number.

Input: A positive integer
Output: The smallest digit

Examples:
Input: 9352
Output: 2

*/

function smallestDigit(n){
    let smallNum = 9999999
    while(n>0){
        if (n%10<smallNum){
            smallNum = n%10
        }
        n = Math.floor(n/10)
    }

    return smallNum
}

console.log(smallestDigit(7321))

//--------------Solution 2---------------

function largestDigit(n){
        return Math.min(...n.toString().split('').map(Number));
    }