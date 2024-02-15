import input from 'readline-sync'

var arr =[ 
    {id: 1, nome: "César", idade: 20},
    {id: 2, nome: "Guto", idade: 19},
    {id: 3, nome: "Julio", idade: 43},
    {id: 4, nome: "Gaiotto", idade: 80},
    {id: 5, nome: "Alves", idade: 53}
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