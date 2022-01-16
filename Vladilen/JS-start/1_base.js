// 1 Переменные
// const myName = 'Yana';
// let lastName = 'Pogodina';
// var age = 32;

//2 мутирование
// const firstName = prompt('Please enter your name');
// const lastName = prompt('Please enter your last name');
// const age = prompt('Please enter your age');
// alert(firstName + ' ' + lastName);
// console.log(`My name is ${firstName} ${lastName} and my age is ${age} years old `);

// 3 Операторы
// let currentYear = 2021;
// let birhtYear = 1989;

// const age = currentYear - birhtYear;
// console.log(age)
// console.log(currentYear++);
// console.log(currentYear);
// console.log(++currentYear);
// console.log(--currentYear);

// let c = 32;
// const a = 10;
// const b = 5;
// console.log(c *= a);
// console.log(c += a);
// console.log(c /= a);
// console.log(c -= a);

// 4 Типы данных
// const isProgrammer = true;
// const firstName = 'Yana';
// const age = 32;
// let x;
// примитивы - примитивные типы данных
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null);

// 5 Приоритет операций
// const fullAge = 32;
// const currentYear = 2021;
// const birhtYear = 1989;

// > < >= <=
// const isFullAge = currentYear - birhtYear == fullAge;
// console.log(isFullAge);

// 6 Условия

// (!== обозначает условие не равно)
// == проверяется равенство по значению
// === проверяется равенство по значению и типу данных

// const courseStatus = 'ready';

// if (courseStatus == 'ready') {
// 	console.log('Course is ready');
// } else if (courseStatus == 'pending') {
// 	console.log('Course is pending');
// } else {
// 	console.log('Course is fall');
// }

// const isReady = true;

// if (isReady) {
// 	console.log('все готово');
// } else {
// 	console.log('все не готово');
// }
// То же самое как тернальное выражение
// isReady ? console.log('все готово') : console.log('все не готово');

//7 Булевая логика

//8 Функции
// function calculatorAge(year) {
// 	return 2022 - year;
// }

// console.log(calculatorAge(1989));
// console.log(calculatorAge(1979));
// console.log(calculatorAge(1982));

// function logInfoAbout(name1, year) {
// 	const age = calculatorAge(year);

// 	if (age > 0) {
// 		console.log('Person, whom name is ' + name1 + ', have age is ' + age);
// 	} else {
// 		console.log(name1 + ' is from future!!!!!');
// 	}
// }

// logInfoAbout('Yana', 1989);
// logInfoAbout('Yaroslav', 2091);

// 9 Array Массивы
//const cars = ['Mazda', 'Mersedes', 'Ford'];
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars[0]);
// console.log(cars[3]);
// console.log(cars.length);

// cars[0] = 'Porshe';
// cars[3] = 'Mazda';
// cars[cars.length] = 'Mazda';
// console.log(cars);

// 10 циклы
// const cars = ['Mazda', 'Mersedes', 'Ford'];

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i];
// 	console.log(car);
// }

// for (let car of cars) {
// 	console.log(car);
// }

// 11 Объекты
// const person = {
// 	fisrtName: 'Yana',
// 	lastName: 'Pogodina',
// 	year: 19889,
// 	languages: ['ru', 'en'],
// 	hasHasband: true,
// 	greet: function () {
// 		console.log('greet for everyone');
// 	}
// }

// console.log(person.fisrtName);
// const key = 'languages';
// person.hasHasband = false;
// person.isProgrammer = true;
// console.log(person[key]);
// person.greet();

// console.log(person);