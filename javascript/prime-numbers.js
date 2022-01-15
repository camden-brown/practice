primeNumberCheck = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(primeNumberCheck(0)) //false
console.log(primeNumberCheck(1)) //false
console.log(primeNumberCheck(2)) //true
console.log(primeNumberCheck(825)) //false
console.log(primeNumberCheck(827)) //true