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