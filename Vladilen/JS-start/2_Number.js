// 1 number
// const num = 42; // integer
// const float = 42.42; //float
// const pow = 10e3;
// console.log(pow);

// Number.MAX_VALUE
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow 53', Math.pow(2, 53) - 1);
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
// console.log('2 / 0', 2 / 0);
// console.log(Number.NaN);
// console.log(typeof NaN);
// const weird = 2 / undefined;
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(42));

// const stringInt = '42';
// const stringFloat = '42.42';
// console.log(stringInt + 2);
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(Number.parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.4 + 0.2);
// console.log(+(0.4 + 0.2).toFixed(4));
// console.log(parseFloat((0.4 + 0.2).toFixed(4)));


// 2 BigInt
// console.log(900719925474099199999999n - 90071992547409919999999n);
// console.log(-900719925474099199999999n - 90071992547409919999999n);

// console.log(10n -4) // error
// console.log(10n - BigInt(4));
// console.log(parseInt(10n) - 4);
// console.log(5n / 2n);

// 3 Math
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25));
// console.log(Math.pow(3, 2));
// console.log(Math.abs(-42));
// console.log(Math.max(1, 32, 56, 87, 55));
// console.log(Math.min(1, 32, 56, 87, 55));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.round(4.9));
// console.log(Math.trunc(4.9));
// console.log(Math.random());

// 4 Example

function getRendom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRendom(10, 42));
