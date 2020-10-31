// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let r = parseInt(gets());
let v = r - 1;
let i = 2;
let sum = r;
let s = 1;

while(v <= r) {
  v = parseInt(gets());
}

while(sum <= v) {
  sum = sum + r + s;
  
  if(sum <= v) {
    i = i + 1;
    s = s + 1;
  }
}

console.log(i)