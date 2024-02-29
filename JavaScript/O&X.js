function XO(str) {
    let x = str.match(/x/gi); //o método .match() é usado para retornar uma nova array que o valor será uma string com expressão regular baseada no parâmetro, no caso vai retornar 
    //todos valores = 'x', indenpententemente se é maiusculo ou minusculo e sem se importar onde está o valor, isso acontece por conta das sintaxes 'g' e 'i' 
    //onde 'i' é para não ter esse "Case Sensitive" e o 'g' é para pegar todos além do primeiro valor
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  };
  
  console.log(XO("zzoo"));
  // https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript