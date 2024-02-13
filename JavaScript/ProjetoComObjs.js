import input from 'readline-sync'

var arr =[ 
    {id: 1, nome: "guto"},
    {id: 2, nome: "César"}
];

    let mudar_arr = input.question("Qual valor voce deseja alterar? (1) ID ou (2) Nome: "); //input para escolher ID ou Nome
    if (Number(mudar_arr) == 1){
        
    for(let dados in arr){
        console.log(arr[dados].id); //laço for in para mostar os dados existentes
        }
    mudar_arr = input.question("Qual ID voce deseja alterar?: "); //input para escolher qual  
    
    let escolheu = Number(mudar_arr);
    console.log("ID escolhido: "+arr[escolheu-1].id);

    let mudou = input.question("Valor para mudar o ID: ");
    console.log(arr[escolheu-1].id = Number(mudou))
    console.log(arr);
};