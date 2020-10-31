let jewels = []
let stop = 0

while (stop !== 1) {
  let cases = gets()
  
  if (cases == 0) {
    stop = 1
  } else {
    for (let i = 1; i <= cases.length; i++) {
      jewels.push(cases)
    }
  }
}

let unique = jewels.filter((elem, pos, self) => {
  return self.indexOf(elem) == pos
})

console.log(unique.length)