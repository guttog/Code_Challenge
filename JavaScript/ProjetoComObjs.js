import input from 'readline-sync'

var arr =[ 
    {id: 1, nome: "", idade: 0},
    {id: 2, nome: "", idade: 0},
    {id: 3, nome: "", idade: 0},
    {id: 4, nome: "", idade: 0},
    {id: 5, nome: "", idade: 0},
    {id: 6, nome: "", idade: 0},
    {id: 7, nome: "", idade: 0},
    {id: 8, nome: "", idade: 0},
    {id: 9, nome: "", idade: 0},
    {id: 10, nome: "", idade: 0},
    {id: 11, nome: "", idade: 0},
    {id: 12, nome: "", idade: 0},
    {id: 13, nome: "", idade: 0},
    {id: 14, nome: "", idade: 0},
    {id: 15, nome: "", idade: 0},
    {id: 16, nome: "", idade: 0},
    {id: 17, nome: "", idade: 0},
    {id: 18, nome: "", idade: 0}
];
  
    let mudar_arr = input.question("Qual valor voce deseja alterar? (3)Sair (1)Idade ou (2)Nome: "); //input para escolher ID ou Nome
    if (Number(mudar_arr) == 1){
    
    for(let dados1 in arr){
        console.log(arr[dados1]);
    };
    mudar_arr = input.question("\nEscolha o ID da idade voce deseja alterar?: "); //input para escolher qual Idade vai alterar
    
    let escolheu = Number(mudar_arr);
    console.log("\nIdade escolhido: "+arr[escolheu-1].idade);

    let mudou = input.question("Valor para mudar o Idade: ");
    arr[escolheu-1].idade = Number(mudou);
    
    for(let dados2 in arr){
        console.log(arr[dados2]);
    };
    }
    else if(Number(mudar_arr) == 2){
        
    for(let dados3 in arr){
        console.log(arr[dados3]);
    };
    mudar_arr = input.question("\nQual Nome voce deseja alterar?: "); //input para escolher qual Nome vai alterar pelo ID
    
    let escolheu = Number(mudar_arr);
    console.log("\nNome escolhido: "+arr[escolheu-1].nome);

    let mudou = input.question("Valor para mudar o Nome: ");
    arr[escolheu-1].nome = mudou;
    
    for(let dados in arr){
        console.log(arr[dados]);
    };
    }

    else if ( Number(mudar_arr) == 3) {
        console.log("Saiu!");
    };