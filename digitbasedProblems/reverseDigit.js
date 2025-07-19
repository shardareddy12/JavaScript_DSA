/*

Problem: Reverse the Digits
Reverse the digits of a given number and return the result as a number.

Input: A positive integer
Output: The number with digits reversed

Examples:

Input: 1234
Output: 4321

*/

//--------------Solution 1 -------------------

function reverseDigit(n){
    let reverse_num = 0

    while(n>0){
        digit = n%10
        reverse_num = reverse_num*10+digit

        n = Math.floor(n/10)
    }
    return reverse_num
}

console.log(reverseDigit(12034))

//-------------Solution 2 -----------------

function reverseDigit(n){
        return parseInt(n.toString().split('').reverse().join(''));
    }