
//                1 Functions
// greet('Lena');
// greet2('Lena');

//function Declaration можно обращаться к переменной до функции
// function greet(name1) {
// 	console.log('Hi ', name1);
// }
// function Expression нельзя обращаться к переменной до функции
// const greet2 = function greet2(name1) {
// 	console.log('Hi2', name1)
// }

// console.log(typeof greet);
// console.dir(greet);

//               2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval);
// 	} else {
// 		console.log(++counter);
// 	}
// }, 1000);

//       3 Стрелочные функции
// function greet(name3) {
// 	console.log('Hello - ', name3);
// }

// const arrow = (name1) => {
// 	console.log('Hello - ', name1);
// }

// const arrow2 = name1 => console.log('Hello - ', name1);
// arrow('Yana');
// arrow2('Yaroslav');
// greet('Alice');

// const pow2 = num => num ** 2;

// console.log(pow2(5));

//               4 параметры по умолчанию
// const sum = (a = 40, b = 40 * 2) => a + b;

// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
// 	let result = 0;
// 	for (let num of all) {
// 		result += num;
// 	}
// 	return result;
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7);
// console.log(res);

//           5 Замыкание

// function createMember(name1) {
// 	return function (lastName) {
// 		console.log(name1 + lastName);
// 	}
// }

// const logWithLastName = createMember('Yana');
// console.log(logWithLastName(' Pogodina'));
// console.log(logWithLastName(' Matsik'));