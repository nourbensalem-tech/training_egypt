function calculate(a,b,operation){

switch(operation){

case "+":
return a+b;

case "-":
return a-b;

case "*":
return a*b;

case "/":
return a/b;

default:
return "Invalid operation";

}

}

console.log(calculate(20,5,"+"));
console.log(calculate(20,5,"-"));
console.log(calculate(20,5,"*"));
console.log(calculate(20,5,"/"));