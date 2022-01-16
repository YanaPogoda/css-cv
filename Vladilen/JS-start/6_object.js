const person = {
	name1: 'Yana',
	age: 32,
	isProgrammer: true,
	language: ['ru', 'en', 'de'],
	//'complex key': 'Complex Value',
	//['key ' + (1 + 3)]: 'Computed key',
	greet() {
		console.log('greet from person');
	},
	info() {
		console.log('this:', this);
		console.info('info about person whom name is:', this.name1);
	}
}

// console.log(person.name1);
// const ageKey = 'age';
// console.log(person[ageKey]);
// console.log(person['age']);
// console.log(person['complex key']);
// console.log(person);
// person.greet();

// person.age++;
// person.language.push('by');
// delete person['key 4'];

// console.log(person);

// const name1 = person.name1;
// const age = person.age;
// const language = person.language;
// деструктуризация
// const { name1, age: personAge = 10, language } = person;

// console.log(name1, personAge, language);

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log('key:', key);
// 		console.log('value:', person[key]);
// 	}
// }

//          object
// const keys = Object.keys(person);
// console.log(keys);
// keys.forEach((key) => {
// 	console.log('key:', key);
// 	console.log('value:', person[key]);
// })

//      context
//person.info();

const logger = {
	keys(obj) {
		console.log('Object Keys: ', Object.keys(this));
	},
	keysAndValues() {
		Object.keys(this).forEach(function (key) {
			console.log(`"${key}": ${this[key]}`);
		}.bind(this))
	},

	withParams(top = false, between = false, bottom = false) {
		if (top) {
			console.log('---------start----------')
		}
		Object.keys(this).forEach((key, index, array) => {
			console.log(`"${key}": ${this[key]}`)
			if (between && index !== array.length - 1) {
				console.log('----------------------')
			}
		})
		if (bottom) {
			console.log(`---------end----------`)
		}
	}
}

// const bound = logger.keys.bind(person);
// bound();
//logger.keysAndValues.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
