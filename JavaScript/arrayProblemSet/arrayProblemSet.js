// reverse array
function printReverse(arr) {
	for (i = arr.length; i > -1; i--) {
	console.log(arr[i]);
	}
}

//true if all contents of array same 
function isUniform(arr) {
	var first = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (first !== arr[i]) {
			return console.log("false");
		}
	}
	console.log("true");
}

//adds up numbers in array with for loop
function sumArray(arr) {
	var total = 0;
	for (i = 0; i < arr.length; i++) {
		total+=arr[i];
	}
	console.log(total);
}

//using forEach for adding up numbers in array
function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total+=element;
	});
	console.log(total);
}

//console logs biggest number
function max(arr) {
	var largest = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}
	console.log(largest);
}

//using forEach for console loggin biggest number;
function biggest(arr) {
	var largest = arr[0];
	arr.forEach(function(element) {
		if (element > largest) {
			largest = element;
		}
	});
	console.log(largest);
}
