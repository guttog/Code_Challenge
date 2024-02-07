function highAndLow(numbers){
    /* aqui eu utilizo o método ".split()" que pega uma string e transforma ela em uma array, sendo mais técnico, esse método pega uma string e divide ela em uma 
    lista ordenada de substrings pega essas substrings coloca em uma array e retorna uma array, por isso eu tenho que criar a variavel "let arr" e uso o método .split() dentro do let arr, e o ".map()" é um método muito versátil, 
    no caso eu uso para definir que todos os valores dentro da array "let arr" tenham o output do tipo "Number". Mas o método .map(), no geral, ele pega uma array existente e devolve o output dentro de uma outra array, e esse output vai varias do oque você precisa 
     */
    let arr = numbers.split(" ").map(Number);
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return max+" "+min
  }

console.log(MaiorMenor("1 2 3"));
