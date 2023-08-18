
//1 for loop practice
for (let i = 1; i <= 10; i++) {
  document.write('<h1>Md Jahirul Islam</h1>');
}
document.write('End')


//2 for loop practice
for (let i = 99; i >= 1; i = i - 2) {
  document.write('  ' + i);
}
document.write('  End')

// for loop practice
let add = 0;
for (let i = 1; i <= 20; i++) {
  add = add + i;
}
document.write(add);

// for loop practice
let sum = 0;
for (let i = 2; i <= 20; i = i + 2) {
  sum = sum + i;

}
document.write(sum);


// while loop practice
let a1 = 2;
while (a1 <= 100) {
  document.write('  ' + a1);
  a1 = a1 + 2;
}

// for loop practice
for (let i = 1; i <= 100; i++) {
  document.write('  ' + i);
}

// while loop practice
let sum1 = 0;
let j = 2;

while (j <= 100) {
  sum1 = sum1 + j;
  j = j + 2;
}
document.write(sum1);


// while loop practice
let k = 1;
let sum2 = 0;
while (k <= 200) {
  if (k % 3 == 0 && k % 5 == 0) {
    document.write(' ' + k + ' + ')
    sum2 = sum2 + k;
  }
  k++;
}
document.write(' = ' + sum2);

// while loop & conditon practice
let f = 1;
while (f <= 100) {
  if (f % 2 == 0) {
    continue;
  }

  document.write('  ' + i);
  f++;
}

// For loop & condition practice
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    continue;
  }
  document.write('  ' + i);
}


//do while loop practice
let r = 1;
do {
  document.write('  ' + r);
  r++;
} while (r <= 10);




// for loop practice forword
for (let a = 1; a <= 5; a++) {
  console.log(a);
}
console.log('Counting completed!')

// for loop practice Reveace
for (let a = 5; a >= 1; a--) {
  console.log(a);
}
console.log("Counting Finished!");

// while loop practice forword
var b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}
console.log("Counting Complite!");

// while loop practice forword
var c = 5;
while (c >= 1) {
  console.log(c);
  c--;
}
console.log("Counting Finished!");

// for loop practice forword
var d = 2018;
while (d <= 2022) {
  console.log(d);
  d++;
}
console.log("Task complited!");


for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz  ' + i);
  } else if (i % 3 == 0) {
    console.log('Fizz  ' + i);
  } else if (i % 5 == 0) {
    console.log('Buzz  ' + i);
  }
}

// 1 Hello Name print
function yourName(Name) {
  alert(`Hello ${Name}`);
} yourName('jahir');

// 2 two number sum print
function sum(a, b) {
  return a + b;
} sum(20, 22);

// 4 Even or Odd number print

function evenOdd(a) {
  if (a % 2 === 0) {
    return `${a} is even number`;
  } else {
    return `${a} is Odd number`;
  }
} evenOdd(112);


let a = 'Bangladesh';
let b = '';

for (var i = a.length - 1; i => 0; i--) {
  b = b + a[i];
  console.log(b);
}
