window.onload = function(event) {
	console.log('Hi Mom');
	console.log(typeof 42);
	console.log(document);
	let ul = document.createElement('ul');
	console.log(ul);
	document.getElementById('list').innerHTML = 'I like cats'
} /*when the window has finished loading, do this. Can be reused everytime the page loads because it is a function*/