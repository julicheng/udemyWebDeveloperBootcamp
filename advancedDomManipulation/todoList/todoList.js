
//for first li only
// var firstLi = document.querySelector('li');

// firstLi.addEventListener('mouseover', function () {
// 	firstLi.style.color = "green";
// })

// firstLi.addEventListener('mouseout', function() {
// 	firstLi.style.color = "black";
// })


//for li that has been hovered
var lis = document.querySelectorAll('li');

for (var i = 0; i < lis.length; i++){
		lis[i].addEventListener('mouseover', function () {
			// this.style.color = "green";
			this.classList.add('selected');
		})

		lis[i].addEventListener('mouseout', function() {
			// this.style.color = "black";
			this.classList.remove('selected');
		})

		lis[i].addEventListener('click', function () {
			this.classList.toggle('done')
		})
	}


