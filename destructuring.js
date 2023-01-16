// 1. array destructuring
const numbers = [42, 45];
// const x= numbers[0]
// const y= numbers[1]

// const [x, y] = [42, 45]

const [x, y] = numbers;

function boxify(one, two) {
    const nums = [one, two];
    return nums;
}
// console.log(boxify(90, 99))
// destructuring
const [first, second] = boxify(55, 45);
console.log(first, second);


// -----------------------
const student = {
    name: 'Abdul Satter',
    age: 20,
    events: ['programmer', 'web developer']
}

const [firstEvent, secondEvent] = student.events;
console.log(firstEvent)

// object destructuring
// const { name, id } = { name: 'alu', id: 011 };
const { name, age } = student;
console.log(name)

