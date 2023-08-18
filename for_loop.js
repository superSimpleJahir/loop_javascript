// for loop 
let sum = 0;
let n = prompt('Enter The value of n: ');
n = Number.parseInt(n);
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(`sum of first ${n} natural number is ${sum}`);

// Print even numbers
for (let i = 0; i < 100; i += 2) {
  console.log(i);
}

// Print odd numbers
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// for in loop

let obj = {
  jahir: 59,
  mijan: 44,
  masum: 50,
  jahid: 60,
  arif: 33,
  jaml: 50
}

for (let a in obj) {
  console.log(`Marks of ${a} are ${obj[a]};`);
}