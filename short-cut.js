// false , '',0,null,undefined
// true, 'string', 4,{},[]

// check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100
}
else {
    myVar = 0;
}

// check falshy
let money = 50;
if (!money) {

}

const taka = 80;
let food;
if (taka > 100) {
    food = 'birani'
}
else {
    food = 'dal vat kha giye'
}

// ternary
let foody = taka > 100 ? 'birani' : 'dal vat kha ga';
// console.log(foody, food)

let drink = (taka > 100 && myVar > 100) ? 'birani' : 'vorta vat';

// number to string
const num1 = 55;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number 
const str = '100';
const number = +str;
// console.log(number)

// shortCut ternary
let isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be execute 
isActive && showUser();
// use || if
isActive || hideUser();


// toggle boolean
isActive = !isActive;