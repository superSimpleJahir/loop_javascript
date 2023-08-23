let Name = ['mijan', 'jahir', 'jahid', 'arif', 'saifulla', 'sojib'];
// forEach loops kono value return korena and kono variable a o store kora jaina 
const valus = Name.forEach((item) => {
  // console.log(item);
  return item;
});

// console.log(valus);


// filter value return kore je kono variable a store kora jai 
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((num) => num > 5);
// console.log(newNum);

const newNum1 = [];
myNum.forEach((num) => {
  if (num > 4) {
    return newNum1.push(num);
  }
})
// console.log(newNum1);


const books = [
  {
    title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004
  },
  {
    title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008
  },
  {
    title: 'Book three', genre: 'History', publish: 1999, edition: 2007
  },
  {
    title: 'Book four', genre: 'Non-Fiction', publish: 2000, edition: 2010
  },
  {
    title: 'Book five', genre: 'Science', publish: 2004, edition: 2004
  },
  {
    title: 'Book six', genre: 'History', publish: 1981, edition: 2004
  },
  {
    title: 'Book seven', genre: 'Science', publish: 1981, edition: 2004
  },
  {
    title: 'Book eight', genre: 'Fiction', publish: 2005, edition: 2004
  },
  {
    title: 'Book nine', genre: 'History', publish: 1981, edition: 2004
  },
  {
    title: 'Book ten', genre: 'Fiction', publish: 2002, edition: 2004
  },
]

const newBooks = books.filter((bk) => bk.genre === 'Fiction');
// console.log(newBooks);

const newBooks1 = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'Fiction');
console.log(newBooks1);

