for ( i=0; i < 3; i++ ) {
  let numberTurtles = gets();
  let turtleSpeed = gets();
  let arrTurtleSpeed = turtleSpeed.split(" ");
  let biggerSpeed = 0;
  let level = 0;

  biggerSpeed = arrTurtleSpeed.reduce((x, y) => (
    Math.max(x, y)
  )) 
  
  if (biggerSpeed < 10){
    level = 1;
  } else if (biggerSpeed >= 10 && biggerSpeed < 20) {
    level = 2;
  } else {
    level = 3
  }
  
  console.log(level)
}