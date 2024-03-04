function countPositivesSumNegatives(input) {
    var negativo_soma = 0;
    var positivo = 0;
if(input == null || input.length == 0){
    return [];
}else{
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
          positivo++;
      }
        else{
          negativo_soma += input[i]
      }
    }
    return [positivo,negativo_soma]
    }
}
  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
  