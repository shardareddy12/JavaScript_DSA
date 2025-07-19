/*

Problem:    Binary Division with Remainder
Given two binary strings a and b, return the quotient and remainder in 
binary form.

Input:      Binary strings a and b.
Output:     The quotient and remainder.

Example:

Input:
a = "1011"
b = "10"

Output:
Quotient = "101"
Remainder = "1"

(Explanation: 1011 (11) ÷ 10 (2) = 101 (5) remainder 1)

*/

a = "1011"
b = "10"

function binary_Division(a,b){
    let numA = BigInt('0b'+a)
    let numB = BigInt('0b'+b)

    if (numB===BigInt(0)){
        return {divisor:"Undefined",divident:"Undefined"}
    }

    const quotient = (numA / numB).toString(2)
    const remainder = (numA % numB).toString(2)

    return {Quotient:quotient,Remainder:remainder}
}

console.log(binary_Division(a,b))