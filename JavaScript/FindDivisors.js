function divisors(integer) {
  let nums = [];
  for(let i = 0; i <= integer; i++){//fiz um laço for com o if para percorrer todos os valores divisiveis pelo 'integer'
    if(i !== 1 && i !== integer && integer % i === 0){ // desde que o valor não seja 1 ou o próprio 'integer'
      nums.push(i);//o método .push() vai pegar o valor numérico do laço for e jogar dentro da array "nums"
      //fazendo assim uma array numérica
    }
  };
  if(nums.length == 0){// aqui é para verificar se é um numero primo ou não, pois se o tamanho da array for
    //igual a zero, eu posso considerar que é um num primo pelo fato de no laço for eu não deixar entrar valores que sejam iguais a 1 ou ao proprio numero
    return integer+ " is prime"
  }else{
  return nums;
  }
};
console.log(divisors(8));

//LEMBRETE
//numero primo só é divisivel por 1 ou por ele mesmo