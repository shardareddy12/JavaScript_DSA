/*

Problem:Binary Addition with Base Conversion

Given two binary strings a and b, return their sum in base-8 (octal) or
base-16 (hexadecimal).

Input:      Binary strings a and b.
Output:     The result in octal or hexadecimal format.

Example:

Input:
a = "1010"
b = "1100"

Output (Octal): "24"
Output (Hexadecimal): "14"

✅ .toString() converts a number to string.
✅ .toString(radix) converts to that base (binary-2, octal-8, hex-16, etc.).

How it worked:

sum of a and b is = 22
octal:  22/8 = 2  reminder = 6
        2/8 = 0   reminder = 2   i.e 26
Hex:    22/16=1   reminder = 6
        1/16=0    reminder=1     i.e 16

*/

a = "1010"
b = "1100"

function addbinarynum(a,b){
    let numA = parseInt(a,2)
    let numB = parseInt(b,2)

    let sum = numA + numB
    console.log(sum)

    const octalResult = sum.toString(8)
    const hexResult =  sum.toString(16).toUpperCase()

    return {octal: octalResult, hex: hexResult}
}

console.log(addbinarynum(a,b))