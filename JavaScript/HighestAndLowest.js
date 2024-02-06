function highAndLow(numbers){
    //
    let arr = numbers.split(" ").map(Number);
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return max+" "+min
  }

console.log(MaiorMenor("1 2 3"));
