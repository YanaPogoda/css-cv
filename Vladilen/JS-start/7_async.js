//            Event loop
//ex1
// const timeOut = setTimeout(() => {
// 	console.log('after timeout');
// }, 2500);
// clearTimeout(timeOut);

// const interval = setInterval(() => {
// 	console.log('after interval');
// }, 1000);
//clearTimeout(timeOut);

//ex2
// const delay = (callback, wait = 1000) => {
// 	setTimeout(callback, wait);
// }

// delay(() => {
// 	console.log('After 2 sec');
// }, 2000);

//ex3
const delay = (wait = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
			// reject('Something wrong! Try again!')
		}, wait)
	})
	return promise;
}

// delay(2500)
// 	.then(() => {
// 		console.log('After 2 sec');
// 	})
// 	.catch(err => console.error('error', err))
// 	.finally(() => {
// 		console.log('Finally');
// 	})

const getData = () => new Promise(resolve => resolve([
	1, 1, 2, 3, 5, 8, 13
]))

//getData().then(data => console.log(data))

async function asyncExample() {
	await delay(3000);
	const data = await getData();
	console.log('Data:', data);
}

asyncExample()