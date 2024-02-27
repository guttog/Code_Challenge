import input from 'readline-sync'

var arr =[ 
    {id: 1, nome: "César", idade: 20},
    {id: 2, nome: "Guto", idade: 19},
    {id: 3, nome: "Julio", idade: 43},
    {id: 4, nome: "Gaiotto", idade: 80},
    {id: 5, nome: "Alves", idade: 53}
];
   function mostrarArr(){
    for(let dados_impressos in arr){
        console.log(arr[dados_impressos]);
        };
    };
  
    let escolha = input.question("Oque deseja fazer? (4)Sair (1)Mudar Idade (2)Mudar Nome ou (3)Adicinar Nome/Idade: "); //input para escolher ID ou Nome
                    if (Number(escolha) == 1){
                    
                    mostrarArr();
                    escolha = input.question("\nEscolha o ID da idade voce deseja alterar?: "); //input para escolher qual Idade vai alterar
                    
                    let escolheu = Number(escolha);
                    console.log("\nIdade escolhida: "+arr[escolheu-1].idade);

                    let mudou = input.question("Nova idade: ");
                    arr[escolheu-1].idade = Number(mudou);
                    
                    }
         else if(Number(escolha) == 2){
            mostrarArr();
            escolha = input.question("\nQual Nome voce deseja alterar?: "); //input para escolher qual Nome vai alterar pelo ID
            
            let escolheu = Number(escolha);
            console.log("\nNome escolhido: "+arr[escolheu-1].nome);

            let mudou = input.question("Valor para mudar o Nome: ");
            arr[escolheu-1].nome = mudou;
            
        }
        else if(Number(escolha) == 3){
            
            let nome = input.question("\nDigite um nome: ");
            let idade = input.question("\nAgora uma idade: ");
            
            let escolheu_nome = nome;
            let escolheu_idade = Number(idade);
            

            arr.nome+=escolheu_nome;
            arr.idade+=escolheu_idade;

        }

            else if( Number(escolha) == 4) {
            console.log("Saiu!");
        }
    else{
        console.log("Opção invalida.")
    };
    
    mostrarArr();