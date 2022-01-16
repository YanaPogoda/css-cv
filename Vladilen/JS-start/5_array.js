//         Массивы
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes'];
const fib = [1, 1, 2, 3, 5, 8, 13];
// console.log(cars);

// function
// function addItemToEnd() {

// }

// method
// cars.push('Reno');
// cars.unshift('Volga')
// console.log(cars);

// const firstItem = cars.shift();
// const lastItem = cars.pop();
// console.log(lastItem);
// console.log(firstItem);
// console.log(cars);

// console.log(cars.reverse());
// console.log(cars);

// Example1
// const text = 'Hi, We are learning JavaScript!';
// const reverseText = text.split('').reverse().join('');
// console.log(reverseText);

// Example2
// const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes'];

// const index = cars.indexOf('BMW');
// cars[index] = 'Porshe';
// console.log(cars);

// Example 3/1
// const people = [
// 	{ name1: 'Yana', budget: 4200 },
// 	{ name1: 'Yaroslav', budget: 3500 },
// 	{ name1: 'Alice', budget: 1700 },
// ]

// const index = people.findIndex(function (person) {
// 	return person.budget === 3500;
// })
// const person = people.find(function (person) {
// 	return person.budget === 3500;
// })
// console.log(people[index]);
// console.log(person);

// Example 3/2
// const people = [
// 	{ name1: 'Yana', budget: 4200 },
// 	{ name1: 'Yaroslav', budget: 3500 },
// 	{ name1: 'Alice', budget: 1700 },
// ]
// const person = people.find(person => person.budget === 3500);
// console.log(person);

// Example 3/3
// const people = [
// 	{ name1: 'Yana', budget: 4200 },
// 	{ name1: 'Yaroslav', budget: 3500 },
// 	{ name1: 'Alice', budget: 1700 },
// ]
// let findPerson;
// for (const person of people) {
// 	if (person.budget === 3500) {
// 		findPerson = person;
// 	}
// }
// console.log(findPerson);

//Example 4
// const upperCaseCars = cars.map(car => {
// 	return car.toUpperCase();
// })
// console.log(upperCaseCars);
// console.log(cars);

//Example 5
// const pow2 = num => num ** 2;
// const sort = num => Math.sqrt(num);

// const pow2Fib = fib.map(pow2).map(Math.sqrt);
// console.log(pow2Fib);

// Example 6
// const pow2 = num => num ** 2;

// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(filteredNumbers);

// Example 7
const people = [
	{ name1: 'Yana', budget: 4200 },
	{ name1: 'Yaroslav', budget: 3500 },
	{ name1: 'Alice', budget: 1700 },
]

const allBudget = people
	.filter(person => person.budget > 2000)
	.reduce((acc, person) => {
		acc += person.budget;
		return acc;
	}, 0)

console.log(allBudget);

