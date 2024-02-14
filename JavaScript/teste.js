import input from 'readline-sync'

var arr = ['banana','abacaxi','laranja'];
console.log("Escolha um item: 1)"+arr[0]+", 2)"+arr[1]+", 3)" +arr[2]+ ", 4) Sair")

var num = input.question("Digite um numero: ");

while(num != 4){
    
        var item_selecionado = arr[num-1]
        console.log(item_selecionado)
        continue;
};