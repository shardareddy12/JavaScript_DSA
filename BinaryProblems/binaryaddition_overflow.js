/*
Problem:  Binary addition and overflow detection

Given two binary strings a and b, return their sum in binary form. 
Additionally, detect if an overflow occurs if the resulting sum exceeds
10^4 bits.

Input:
Binary strings a and b.
Output:
The binary sum.
"Overflow" if the resulting binary string exceeds 10^4 bits.

Example:

Input:      a = "111...111" (10,000 ones)
            b = "1"
Output:
            "Overflow"

*/

a='1'.repeat(10)
b='1'

function addBinaryWithOverflow(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';
    let count = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA = i >= 0 ? Number(a[i]) : 0;
        const bitB = j >= 0 ? Number(b[j]) : 0;
        const sum = bitA + bitB + carry;

        result = (sum % 2) + result;  // prepend to result string
        carry = Math.floor(sum / 2);

        i--;
        j--;

        count++;
        if (count > 10000) {
            return "Overflow";
        }
    }

    if (count > 10000) {
        return "Overflow";
    }

    return result;
}


console.log(addBinaryWithOverflow(a,b))




//-----------------------Solution 2------------------------------

let sum = BigInt('0b' + a) + BigInt('0b' + b);
let result = sum.toString(2);
if (result.length > 10000) {
    return "Overflow";
}
// return result;

/*
Why Not use bigint
1. it has there own size limit
2. performance

With 10^4 or 10^5 bit-long numbers, you are approaching hundreds of kilobytes or megabytes of memory, which:

May crash with memory errors,

May freeze the process or hit timeouts.

In contrast, when we manually loop:
✅ We can early stop as soon as length > 10,000,
✅ We don’t store or build the entire BigInt object in memory.

With BigInt:

You lose fine-grained control,

You pay the cost up front to compute the entire number,

You only know after full computation if it overflows.
 */
