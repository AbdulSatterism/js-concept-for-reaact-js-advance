/*
how to declare a ariable using let and const 
*/
const name = 'Abdul Satter';
let season = 'winter';

// 6 basics conditons >,<,===,!==,<=,>=
// multiple condition: &&, ||

if (name === 'abdul satter' || season === 'rainy') {

}
else if (name === "Abdul Satter") {

}
else {

}

// Array 
// array index,
// array length, push, 
const numbers = [24, 45, 87];
numbers[0] = 100;

//loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

// function
function multily(a, b) {
    const result = a * b;
    return result;
}
console.log(multily(45, 2));

// object 
// 3 ways tos access property by name
const student = {
    name: 'Abdul Satter',
    id: 20,
    events: ['Programmer', 'web developer']
}
console.log(student.age);//direct access
console.log(student['age'])// access via property name string
const myVariabel = 'age'
console.log(student.myVariabel);//access via property name in a variable
