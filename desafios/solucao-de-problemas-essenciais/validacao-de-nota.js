let count = 0
let nota = 0

while(true) {
  let getNota = parseFloat(gets())
  
  if(getNota < 0 || getNota > 10) {
    console.log("nota invalida")
  } else {
    nota += getNota
    count++
    
    if(count == 2) {
      break;
    }
  }
}

let media = nota / count

console.log("media = " + media.toFixed(2))