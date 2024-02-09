let x = 10;

function inverter(str) {
    let strInvertida = '';
    let string = String(str) 
    
    for (let i = string.length - 1; i >= 0; i--) {
        strInvertida += string[i];
    }

    if (strInvertida == string){
        return true
    }
    else{ 
        return false
    }
    
}
console.log(x,inverter(x),typeof(x)); 

//https://leetcode.com/problems/palindrome-number/description/