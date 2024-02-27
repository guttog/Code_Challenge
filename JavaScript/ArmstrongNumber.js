const nums = 153;
let str = nums.toString();
var soma = null;
for(let i = 0; i < str.length; i++){
        let num = (str[i]**str.length)
        soma += num
}
if(nums === soma){
        console.log("True");
}
else{
        console.log("False");
}