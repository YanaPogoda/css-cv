// alert('1');
// prompt('What is your name?');
// window.matchMediaconfirm('What is your name?');
// console.dir(heading);
// console.dir(heading.id);

const heading = document.getElementById('hello');
//устаревшие методы
//const heading2 = document.getElementsByTagName('h2')[0];
//const heading2 = document.getElementsByClassName('h2-class')[0];
//новые методы
//const heading2 = document.querySelector('.h2-class');
//const heading2 = document.querySelector('h2');
const heading2 = document.querySelector('#sub-hello');

//console.dir(heading2);

//const heading3 = heading2.nextElementSibling; example1
const h2List = document.querySelectorAll('h2');
//console.log(h2List);
const heading3 = h2List[h2List.length - 1];
//console.log(heading3);

setTimeout(() => {
	addStylesTo(heading, 'JavaScript');
}, 1500);

const link = heading3.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault();
	console.log('click on link', event.target.getAttribute('href'));
	const url = event.target.getAttribute('href');

	window.location = url;
})

setTimeout(() => {
	addStylesTo(heading3.children[0], 'Практикуйся ', 'blue');
}, 3000);

setTimeout(() => {
	addStylesTo(heading2, 'И все получится!', 'yellow', '2rem');
}, 4500);

function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text;
	node.style.color = color;
	node.style.textAlign = 'center';
	node.style.backgroundColor = 'black';
	node.style.padding = '2rem';
	node.style.width = '100%';
	node.style.display = 'block';
	//falsy: '', underfind, null, 0, false
	if (fontSize) {
		node.style.fontSize = fontSize;
	}
}
//EX4
heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000';
		heading.style.backgroundColor = '#fff';
	} else {
		heading.style.color = 'red';
		heading.style.backgroundColor = '#000';
	}
}

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000';
		heading2.style.backgroundColor = '#fff';
	} else {
		heading2.style.color = 'yellow';
		heading2.style.backgroundColor = '#000';
	}
})