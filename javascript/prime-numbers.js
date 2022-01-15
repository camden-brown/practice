primeNumber = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(primeNumber(0)) //false
console.log(primeNumber(1)) //false
console.log(primeNumber(2)) //true
console.log(primeNumber(825)) //false
console.log(primeNumber(827)) //true

primeNumbers = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (primeNumber(i)) arr.push(i)
    i++
  }
  return arr;
}

console.log(primeNumbers(2))
console.log(primeNumbers(5))
console.log(primeNumbers(10000)) // =)