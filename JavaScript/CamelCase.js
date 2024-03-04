function CamelCase(str){
    
    let sem_espaco = str.replace(/\s/g,"");
    let arr = str.split(" ");

    for(let i=0; i < arr.length; i++){
    
        let letra = arr[i];
        arr[i] = letra.charAt(0).toUpperCase() + letra.slice(1);
    
};

    let resultado = arr.join("");
    return resultado
};

let teste = CamelCase("test case");
console.log(teste)

