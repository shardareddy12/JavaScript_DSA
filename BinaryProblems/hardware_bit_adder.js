/*

Problem:  Hardware Bit Manipulation (Fast Adder Design)

Design a binary adder that simulates the behavior of hardware 
addition using bitwise operations. The solution should efficiently 
handle 32-bit integers without converting them to decimal.

Input:  Binary strings a and b.
Output: The binary sum.

Example:

Input:
a = "00000000000000000000000000001011"
b = "00000000000000000000000000000101"

Output:
"00000000000000000000000000010000"

(Explanation: 11 + 5 = 16)

***  In hardware, addition works like this

XOR (^) gives the sum without carry.
AND (&) + left shift (<<) gives the carry.
We loop until the carry becomes 0.

*/

a = "00000000000000000000000000001011"
b = "00000000000000000000000000000101"

function hardware_bitadd(a,b){
    //convert binary string to 32 bit integer

    let x = parseInt(a,2)
    let y = parseInt(b,2)

    while(y!=0){
        let carry = (x & y) << 1;  // carry bits
        x = x ^ y;                 // sum without carry
        y = carry;                 // update carry
        console.log(y)
    }
    // Convert back to 32-bit binary string with leading zeros
    let result = x.toString(2).padStart(32,'0');
    return result
}

console.log(hardware_bitadd(a,b))