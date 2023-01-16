// 1.json> stringify and prase
const student = {
    name: 'Abdul Satter',
    age: 20,
    events: ['programmer', 'web developer']
};
const studentJSON = JSON.stringify(student);
// console.log(student)
// console.log(studentJSON)

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// fetch 
/*
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))
*/
// keys of object and value 

const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 15, 45];
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2);

// for of in array like object
// for in in object 

// add or remove from an array 
const products = [
    { name: 'laptop', price: 23000, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 2000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 4000, brand: 'casio', color: 'yello' },
    { name: 'sunglass', price: 5230, brand: 'ribon', color: 'black' }
];

const newProduct = { name: 'WebCam', price: 245, brand: 'Lal' };

//copy product array and then  add newProduct 
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone

const removePhone = products.filter(pd => pd.name !== 'phone');
console.log(removePhone)
