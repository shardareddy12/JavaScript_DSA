/*
Problem: Binary Multiplication
Given two binary strings a and b, return their product in binary form.

Input:      Binary strings a and b.
Output:     The product in binary format.

Example:
Input:
a = "101"
b = "11"

Output:
"1111"

Explanation: 101 (5) × 11 (3) = 1111 (15)

⚡ Why BigInt?
✅ parseInt(a, 2) gives a Number (limited to 53-bit safe integers).
✅ BigInt('0b' + a) gives an arbitrary large integer → safe for huge binary strings.

*/

a = "101"
b = "11"

function multiply(a,b){
    let numA = BigInt('0b'+a)
    let numB = BigInt('0b'+b)
    let multiplication = numA*numB

    return multiplication.toString(2)
}

console.log(multiply(a,b))