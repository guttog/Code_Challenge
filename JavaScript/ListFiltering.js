let l = [1,'a','b',0,15];

let remover = 'string';

let arrayCerto = l.filter(function(i) { //aqui eu crio uma nova array com o método "filter" que justamente serve para  
    return typeof i !== remover;        //filtrar uma array especifica e cria uma uma array nova baseada na especificada
});                                     //que tem como utilidade remover ou até mesmo adicionar um determinado elemento
console.log(arrayCerto);                

//OBS: Teria como eu usar o método "splice" dentro de um laço 'for' no lugar de usar o "filter", 
//pois com o 'for' iria percorrer a array da direita para a esquerda, oque poderia evitar
//possiveis erros na execução do código, e com o método "splice" iria remover o elemento ou tipo
//especificado pelo index no lugar de criar uma outra array com os valores escolhidos pelo "filter"