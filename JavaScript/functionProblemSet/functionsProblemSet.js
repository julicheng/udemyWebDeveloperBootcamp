function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false
	}
}

function factorial(num) {
	var total = 1
	if (num === 0) {
		return 1;
	} else {
		for (i = 2; i <= num; i++) {
			total *= i;
		}
	}
		return total;
}

function kebabToSnake(string) {
	var newString = string.replace(/-/g, "_");
	return newString;
}