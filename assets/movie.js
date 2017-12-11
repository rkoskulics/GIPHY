// Empty array to hold the movies the user types in
var movieList = ["the birds", "black christmas", "white christmas"];

function renderButtons() {
        // Delete the content inside the movies-view div prior to adding new movies
        $("#movies-view").html("<h1></h1>");
        // Loop through the array of movies, then generate buttons for each movie in the array
        for(var i = 0; i < movieList.length; i++ ) {
          var movieButton= $('<input type="button" value="' + movieList[i] + '"/>');
          movieButton.addClass("movie");
          movieButton.attr("data-name", movieList[i])
        $("#movies-view").append(movieButton);
        }

      };

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var movie = $("#movie-input").val().trim();
    // Write code to add the new movie into the movieList array
    movieList.push(movie);
    console.log(movieList)
    renderButtons();
    });

function displayMovieGif() {
	var movieName = $(this).attr("data-name");
	console.log(movieName);
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lzcGYta9bfMdDiwu3ZImzoJH3rgRatgC&q=" + movieName + "&limit=10&offset=0&rating=G&lang=en";
	$.ajax({
      url: queryURL,
      // The next line tells the previous URL what we want to do to it.
      method: "GET"
      // the next line says to stop the request, then run a function.
    }).done(function(response) {

    });
};
// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieGif);
// Starts the website with a few buttons
renderButtons();