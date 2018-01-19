console.log("hello!");
var isPurple = false;
var button = document.querySelector('button');

// my solution
// button.addEventListener('click', function() {

// 	if (document.body.style.background !== "purple") {
// 		document.body.style.background = "purple"
// 	} else {
// 		document.body.style.background = "white"
// 	}
// });

//colt's 1st solution
// button.addEventListener('click', function() {

// 	if (isPurple) {
// 		document.body.style.background = "white"
// 		isPurple = false;
// 	} else {
// 		document.body.style.background = "purple"
// 		isPurple = true;
// 	}
// });

//colt's 2nd solution
// button.addEventListener('click', function() {

// 	if (isPurple) {
// 		document.body.style.background = "white"
// 	} else {
// 		document.body.style.background = "purple"
// 	}
// 	isPurple = !isPurple //does the opposite of existing value at the end
// });

//colt's 3rd solution with toggle
button.addEventListener('click', function() {
	document.body.classList.toggle('purple');
});


