function getCount(str) {
    let cnt_vogais = 0;
    let vogais = ['a','e','i','o','u'];
    
    for(let i=0; i < str.length; i++){
        if(vogais.includes(str[i])){
            cnt_vogais++
        }
    }
    return cnt_vogais

}
  console.log(getCount("abracadabra"))

//NÃO USAR O .match() NESSE CASO, só usar o .match() quando for apenas uma letra
// em especifico, no caso de todas as vogais, nunca vai retornar o resultado