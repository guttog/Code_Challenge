import input from 'readline-sync'

var arr =[ 
    {id: 1, nome: "guto", idade: 21},
    {id: 2, nome: "César", idade: 20},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21},
    {id: 1, nome: "guto", idade: 21}
];
  
    let mudar_arr = input.question("Qual valor voce deseja alterar? (3)Sair (1)Idade ou (2)Nome: "); //input para escolher ID ou Nome
    if (Number(mudar_arr) == 1){
    
    for(let dados in arr){
        console.log(arr[dados]);
    };
    mudar_arr = input.question("\nEscolha o ID da idade voce deseja alterar?: "); //input para escolher qual Idade vai alterar
    
    let escolheu = Number(mudar_arr);
    console.log("\nIdade escolhido: "+arr[escolheu-1].idade);

    let mudou = input.question("Valor para mudar o Idade: ");
    arr[escolheu-1].idade = Number(mudou)
    
    for(let dados in arr){
        console.log(arr[dados]);
    };
    }
    else if(Number(mudar_arr) == 2){
        
    for(let dados in arr){
        console.log(arr[dados]);
    };
    mudar_arr = input.question("\nQual Nome voce deseja alterar?: "); //input para escolher qual Nome vai alterar pelo ID
    
    let escolheu = Number(mudar_arr);
    console.log("\nNome escolhido: "+arr[escolheu-1].nome);

    let mudou = input.question("Valor para mudar o Nome: ");
    arr[escolheu-1].nome = mudou
    
    for(let dados in arr){
        console.log(arr[dados]);
    };
    }

    else if ( Number(mudar_arr) == 3) {
        console.log("Saiu!")
    }