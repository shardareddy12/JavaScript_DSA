/*
Problem:    Binary Subtraction

Given two binary strings a and b, return their difference in binary 
form. Assume a ≥ b to ensure a non-negative result.

Input:      Binary strings a and b.
Output:     The binary difference.

Example:

Input:
a = "1010"
b = "0011"

Output:
"0111"

(Explanation: 1010 (10) - 0011 (3) = 0111 (7)

*/
//-------------Solution-1 Bigint ---------------------------

a = "1010"
b = "0011"

function subtract_binarynum(a,b){
    let numA = BigInt('0b' + a)
    let numB = BigInt('0b' + b)
    let diff = numA-numB
    let result = diff.toString(2)

    result = result.padStart(a.length,'0')
    return result
}

// console.log(subtract_binarynum(a,b))

//-------------------Solution-2 ----------------------

function subtract_binarynum(a,b){
    let i = a.length-1;
    let j = b.length-1;
    let borrow=0;
    let result = '';

    while(i>=0){
        let bitA = Number(a[i])
        let bitB = i>=0? Number(b[j]) : 0;
        bitA -= borrow

        if(bitA < bitB){
            bitA+=2
            borrow=1
        }else{
            borrow=0
        }

        const diff = bitA-bitB
        result = diff+result;
        
        i--;
        j--;
    }
    // result = result.replace(/^0+(?!$)/, '');
    return result
}

console.log(subtract_binarynum(a,b))