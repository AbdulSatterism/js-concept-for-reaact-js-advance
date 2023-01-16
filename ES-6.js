
const numbers = [12, 14, 54, 13];
const student = {
    name: 'Abdul Satter',
    age: 20,
    events: ['programmer', 'web developer']
}
// templete string 
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]}`;
console.log(about)

// arrow function 
const getFifty = () => 50;
const add = num => num + 50;
const isEven = x => x % 2 == 0;
const addMany = (a, b, c) => a + b + c;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator


// create a new aarray from an older array and add an element
const currentNumber = [...numbers, 101];

const newNumber = [...numbers];

numbers.push(99)
numbers.push(99)
numbers.push(99)
console.log(numbers)
console.log(newNumber);



console.log(currentNumber)