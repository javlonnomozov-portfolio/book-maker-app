// Example functions to generate lists
function function1(num1, num2) {
	return [ num1 + num2, num1 - num2, num1 * num2 ];
}

function function2(num1, num2) {
	return [ num1 / num2, num2 / num1 ];
}

function generateLists() {
	// Get user inputs
	const number1 = parseFloat(document.getElementById('number1').value);
	const number2 = parseFloat(document.getElementById('number2').value);
	const selectedFunction = document.getElementById('functionSelect').value;

	// Clear previous lists
	document.getElementById('list1').innerHTML = '';
	document.getElementById('list2').innerHTML = '';

	// Define the function to be used
	let func1;
	if (selectedFunction === 'printer8Pages') {
		func1 = printer8Pages;
	} else if (selectedFunction === 'function2') {
		func1 = function2; // Just an example, could be different
	}

	// Generate lists
	const result = func1(number1, number2)
	console.log(result);
	const list1 = result[0];
	const list2 = result[1];

	// Update list1 in the UI

	// list1.forEach((item) => {
	// 	const li = document.createElement('li');
	// 	// document.getElementById('list1').appendChild(li);
	// });
	const li1 = document.createElement('li');
	li1.textContent = list1.join(',');
	document.getElementById('list1').appendChild(li1);
	// });
	const li2 = document.createElement('li');
	li2.textContent = list2.join(',');
	document.getElementById('list2').appendChild(li2);
	// Update list2 in the UI
	// 	list2.forEach((item) => {
	// 		const li = document.createElement('li');
	// 		li.textContent = item;
	// 		document.getElementById('list2').appendChild(li);
	// 	});
}
