let salary = gets();
salary = parseFloat(salary);

if (salary <= 2000){
  console.log('Isento');
} else if (salary <= 3000) {
  secondSalaryRange = (salary - 2000) * 0.08;
  result = parseFloat(secondSalaryRange);
  result = result.toFixed(2);
  console.log(`R$ ${result}`);
} else if (salary <= 4500) {
    aux1 = salary - 2000;
    aux2 = salary - 3000;
    aux2 = aux2 >= 0 ? aux2 : 0;
    secondSalaryRange = ((salary - 2000) - aux2) * 0.08;
    thirdSalaryRange = (salary - 3000) * 0.18;
    result = parseFloat(secondSalaryRange + thirdSalaryRange);
    result = result.toFixed(2);
      console.log(`R$ ${result}`);
} else {
    aux1 = salary - 2000;
    aux2 = salary - 3000;
    aux3 = salary - 4500;
    aux2 = aux2 >= 0 ? aux2 : 0;
    aux3 = aux3 >= 0 ? aux3 : 0;
    secondSalaryRange = ((salary - 2000) - aux2) * 0.08;
    thirdSalaryRange = ((salary - 3000) - aux3) * 0.18;
    fourthSalaryRange =  (salary - 4500) * 0.28;
    result = parseFloat(secondSalaryRange + thirdSalaryRange + fourthSalaryRange);
    result = result.toFixed(2);
   console.log(`R$ ${result}`);
}