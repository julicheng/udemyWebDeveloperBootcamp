var movies = [
	{
		name: "Mulan", 
		rating: 5, 
		hasWatched: true
	}, 
	{
		name: "Zootopia", 
		rating: 5, 
		hasWatched: true
	},
	{
		name: "The Little Mermaid", 
		rating: 3.5, 
		hasWatched: false
	},
	{
		name: "Howl's Moving Castle", 
		rating: 4, 
		hasWatched: true
	}
	{
		name: "Your Name",
		rating: 5,
		hasWatched: true
	}
	{
		name: "Spirited Away",
		rating: 5,
		hasWatched: true
	}
	];

// movies.forEach(function(movie){
// 	var result = "You have ";
// 	if (movie.hasWatched) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.name + "\" - ";
// 	result += movie.rating + " stars";
// 	console.log(result);
// })

function buildString(movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
})
