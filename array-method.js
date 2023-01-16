const products = [
    { name: 'laptop', price: 23000, brand: 'lenevo', color: 'silver' },
    { name: 'Phone', price: 2000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 4000, brand: 'casio', color: 'yello' },
    { name: 'sunglass', price: 5230, brand: 'ribon', color: 'black' }
];

const brands = products.map(p => p.brand);
// console.log(brands);
const prices = products.map(p => p.price);
// console.log(prices);

// return na lagle forEach
products.forEach(product => console.log(product.color))

// filter 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)

// n name word filter , filter give total item like [{}]
const specificName = products.filter(pd => pd.name.includes('n'));
console.log(specificName);

// find give only first match element and give only object {}
const findOne = products.find(p => p.name.includes('n'));
console.log(findOne)