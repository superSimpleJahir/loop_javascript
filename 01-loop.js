// for loops
for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
  for (let j = 0; j < 10; j++) {
    const k = j;
    console.log(`${element}${k}`);
  }
}

// while loops
let i = 0;
while (i <= 9) {
  console.log(i);
  let j = 0;
  while (j <= 9) {
    console.log(`${i}${j}`);
    j++;
  }
  i++;
}

// do while loops
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 0);


// for of loops ata array ar upare valo kaj kore and sudu value print kore or ati string ar upare kaj kore
let jahir = ['mijan', 'jahir', 'jahid', 'arif', 'saifulla', 'sojib'];
for (const num of jahir) {
  console.log(num);
}

let a = 'Hello Jahir';
for (const num of a) {
  if (num === " ") {
    continue;
  }
  console.log(num);
}

// Maps ar upare sudu for of loops kaj kore
const map = new Map();
map.set('BN', 'Bangladesh');
map.set('IN', 'India');
map.set('USA', 'United States of Amrica');
map.set('PK', 'Pakistan');
console.log(map);
for (const [key, value] of map) {
  console.log(key, ':-', value);
}

const myObject = {
  BN: 'Bangladesh',
  IN: 'India',
  USA: 'United States of Amrica',
  PK: 'Pakistan'
}
console.log(myObject);

/* object a for of loop kaj korena
for (const [key, value] of myObject) {
  console.log(key, value);
}
*/

// for in loop ata object ar upare valo kaj kore
for (const value in myObject) {
  console.log(value, ':', myObject[value]);
}


const myArray = ['js', 'rb', 'python', 'cpp', 'java'];

for (const key in myArray) {
  console.log(myArray[key]);
}

for (const key in map) {
  console.log(key);
}
const coding = ['js', 'rb', 'py', 'java', 'c++', 'c'];
coding.forEach(function (item) {
  console.log(item);
})

// forEach loop

coding.forEach((jahir) => {
  console.log(jahir);
});