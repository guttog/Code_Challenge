function getMiddle(s)
{
  let resultado = s.length / 2;
  let arredondar = Math.round(resultado);

    if(s.length % 2 === 0){
        return s[resultado-1]+""+s[resultado]
    }
    else{
        return s[arredondar-1]
    }
}
//LEMBRETE: Esse desafio foi para encontrar as letrar do meio da string, indenpendente se é par ou impar
console.log(getMiddle("test"));//es - par
console.log(getMiddle("testing"));//t - impar
console.log(getMiddle("middle"));//dd - par