const nums = 153;
let str = nums.toString();// aqui eu uso o método .toString(), para pegar o valor que vai ser do tipo NUMBER e passar ele para o tipo STRING
var soma = null;
for(let i = 0; i < str.length; i++){
        let num = (str[i]**str.length) //eu uso um 'for' para percorrer pelos valores da string, sem depender do tamanho dela usando o .length
        soma += num                     //e depois faço o calculo com o uso do "**" para fazer o calculo de potencia
}       //e por fim vou adicionando os valores na váriavel 'soma' enquanto eles são somados
if(nums === soma){
        console.log("True"); //no final faço uma verificação com 'if' e 'else' para me retornar o valor 'True' se for um Numero de Armstrong
}                            // ou retorna 'False' caso não seja.   
else{
        console.log("False");
}