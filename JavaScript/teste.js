function XO(str){
var str_low = str.toLowerCase();

var x = str_low.indexOf("x");
var o = str_low.indexOf("o");

var cnt_x = 0;
var cnt_o = 0;

  for(var i=0; i < str_low.length; i++ ){
    if (str_low[i] === "x"){
      cnt_x++
    }
    if(str_low[i] === "o"){
      cnt_o++
    }
  }

};

console.log(XO("zzoo"));

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
